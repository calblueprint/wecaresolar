const firebase = require('firebase');
const _ = require('lodash');

// Initialize required Firebase packages
firebase.initializeApp({
  apiKey: 'AIzaSyARYFXy3DySHolS6t8fL0UsgfyTky_eTXA',
  authDomain: 'we-care-solar-c3e5f.firebaseapp.com',
  databaseURL: 'https://we-care-solar-c3e5f.firebaseio.com',
  projectId: 'we-care-solar-c3e5f',
  storageBucket: 'we-care-solar-c3e5f.appspot.com',
  messagingSenderId: '963041613875',
  appId: '1:963041613875:web:96e9b6562a9a7c4cd76b46',
  measurementId: 'G-N48ZSWDGHL'
});
const db = firebase.firestore();
const auth = firebase.auth();

// Make sure your Airtable API key is available in the .env file with the following contents:
// AIRTABLE_API_KEY=<your key here>
const Airtable = require('Airtable');
require('dotenv').config();
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base('apprKUR7mFdmFaiLm');

// =====================================================
// Helper functions
// =====================================================

/**
 * If you modify values in Airtable within GRACE_PERIOD seconds after Firestore was just updated,
 * the changes will be ignored and a new Firestore upload will NOT trigger.
 * 
 * This is to prevent the updated "Last Firestore Upload" time in Airtable to itself be 
 * considered a modification, which would cause new uploads to be triggered no matter what.
 * 
 * Ideally, this should be a small value so most real changes can be detected.
 */
const GRACE_PERIOD = 5

const airtableDidChange = (tableName) => {
  /**
   * Checks whether the given table in Airtable has changed since the last
   * successful Firestore upload.
   * 
   * (To save $, we don't make requests to Firebase unless something has changed)
   */
  return new Promise((resolve, reject) => {
    const didChange = false;

    base(tableName).select().eachPage(function page(records, fetchNextPage) {
      records.forEach(record => {
        const lastModifiedTime = new Date(record.get('Last Modified'));
        const lastUploadTime = new Date(record.get('Last Firestore Upload'));

        // Table is considered modified if any record:
        // - Is new and marked "published"
        // - Is old and has been modified since the last upload (whether or not it is published)
        if ((lastUploadTime == 'Invalid Date' && record.get('Published')) 
            || lastModifiedTime - lastUploadTime > GRACE_PERIOD * 1000) {
          console.log(`Detected Change in ${tableName}:`, lastUploadTime, lastModifiedTime, lastModifiedTime - lastUploadTime);
          resolve(true);
        }
      });
      fetchNextPage();
    }, function done(err) {
      if (err) {
        console.error(err);
        reject(err);
      }
      else {
        resolve(false);
      }
    });
  });
};

const convertFromAirtable = (tableName, processFn, key='Title') => {
  /**
   * Converts all data from the given table in Airtable to a dictionary of IDs 
   * to formatted Firestore objects. 
   * 
   * `processFn` should take in an Airtable Record object and return an object 
   * in the required format for Firestore.
   */
  return new Promise((resolve, reject) => {
    const result = {};
    const origRecords = [];
    base(tableName).select().eachPage(function page(records, fetchNextPage) {
      records.forEach(record => {
        const published = record.get('Published');
        if (!published) return;
        result[record.get(key)] = processFn(record);
        origRecords.push(record);
      });
  
      fetchNextPage();
    }, function done(err) {
      if (err) {
        console.error(err);
        reject(err);
      }
      else {
        resolve([result, origRecords]);
      }
    });
  });
};

const uploadToFirebase = async (collectionName, resources) => {
  /**
   * Uploads the preprocessed resources to the given collection in Firestore.
   * The collection is REPLACED ENTIRELY by the new resources — this means any old 
   * documents in that Firestore collection will be deleted!
   */
  console.log(resources);

  const batch = db.batch();

  const querySnapshot = await db.collection(collectionName).get();
  const queries = [];
  querySnapshot.forEach(doc => {
    queries.push(db.collection(collectionName).doc(doc.id).delete().then(() => {
      console.log(`Successfully deleted id='${doc.id}' from ${collectionName}.`);
      return true;
    }).catch((error) => {
      console.error(`Error removing document id='${doc.id} from ${collectionName}:'`, error);
      return false;
    }));
  });
  await Promise.all(queries);

  console.log("Done deleting!");

  const uploads = [];
  for (const [id, resource] of Object.entries(resources)) {
    uploads.push(db.collection(collectionName).doc(id).set(resource).then(() => {
      console.log(`Successfully wrote '${id}' to ${collectionName}.`);
      return true;
    }).catch((error) => {
      console.log(`Error writing '${id}':`, error);
      return false;
    }));
  }

  await Promise.all(uploads);
  await batch.commit();

  return true;
};

const updateAirtableTimes = (tableName, origRecords, uploadTime) => {
  const requests = [];
  _.chunk(origRecords, 10).forEach(recordChunk => {
    requests.push(new Promise((resolve, reject) => {
      base(tableName).update(recordChunk.map(record => {
        return {
          "id": record.getId(), 
          "fields": {
            "Last Firestore Upload": uploadTime,
          },
        };
      }), function(err, records) {
        if (err) {
          console.error(err);
          reject(err);
        }
        else {
          resolve(records);
        }
      });
    }));
  });
  return Promise.all(requests);
}

// =====================================================
// Specifying desired Airtable => Firestore formats
// =====================================================

const processResources = (record) => {
  const title = record.get('Title');
  const type = record.get('Type');
  const tags = record.get('Topic Titles').map(title => db.collection('topics').doc(title));

  let data;
  if (type === 'Video') {
    data = {
      preview: record.get('Preview'),
      watchUrl: record.get('Watch URL'),
      downloadUrl: record.get('Download URL'),
      imageUrl: record.get('Image URL'),
    };
  } else if (type === 'Article') {
    data = {
      preview: record.get('Preview'),
      sections: (record.get('Section IDs') || []).map(id => db.collection('sections').doc(String(id))),
    };
  } else {
    console.err("WARNING: Unrecognized resource type", type);
  }
  
  return title, {
    title,
    type,
    tags,
    data,
  };
};

const processSections = (record) => {
  const title = record.get('Title');
  const label = record.get('Label');
  const imageUrl = record.get('Image URL');
  const text = record.get('Text');

  let result = {};
  if (title) result['title'] = title;
  if (label) result['label'] = label;
  if (imageUrl) result['imageUrl'] = imageUrl;
  if (text) result['text'] = text;
  return result;
}

const processTroubleshooting = (record) => {
  const id = record.get('ID');
  const question = record.get('Question');
  const tag = record.get('Tag');
  const description = record.get('Description') || "";
  const sections = (record.get('Section IDs') || []).map(id => db.collection('sections').doc(String(id)));
  const answerOptions = (record.get('Answer Option IDs') || []).map(id => db.collection('answerOptions').doc(String(id)));

  return {
    id,
    question,
    tag,
    description,
    sections,
    answerOptions,
  }
}

const processAnswerOptions = (record) => {
  const id = record.get('ID');
  const text = record.get('Text');
  const style = record.get('Style');

  const followupName = record.get('Follow-up Question Name');
  const followupQuestion = followupName ? db.collection('troubleshooting').doc(followupName[0]) : "";
  const triggerUrl = record.get('Trigger URL') || "";

  return {
    id,
    text,
    style,
    followupQuestion,
    triggerUrl,
  }
}

const processLessons = (record) => {
  const title = record.get('Title');
  const description = record.get('Description');
  const objectives = record.get('Objectives').split('\n').map(objective => objective.substring(2))
  const resourceIDs = record.get('Resource Titles').map(title => db.collection('resources').doc(title));
  return {
    title,
    description,
    objectives,
    resourceIDs,
  };
}

const processTopics = (record) => {
  const name = record.get('Title');
  const description = record.get('Description');
  const imageUrl = record.get('Image URL');
  const suitcaseCoordinates = record.get('Suitcase coordinates')
  return {
    name,
    description,
    imageUrl,
    suitcaseCoordinates,
  };
}

// =====================================================
// Main updating logic
// =====================================================

const checkAndUpdate = async (tableName, collectionName, processFn, force=false, key='Title') => {
  /**
   * Checks if `tableName` in Airtable has changed; if so,
   * will upload all of its data to `collectionName` in Firestore.
   */
  if (await airtableDidChange(tableName) || force) {
    const uploadTime = Date.now();
    const [data, origRecords] = await convertFromAirtable(tableName, processFn, key);
    const result = await uploadToFirebase(collectionName, data);
    if (result) {
      await updateAirtableTimes(tableName, origRecords, uploadTime);
      console.log(`Updated Airtable times for ${tableName}.`)
    }
    console.log(`(SUCCESS) Done making all changes to ${collectionName}!!`);
  }
  else {
    console.log(`No recent changes to ${tableName}. Skipping update.`);
  }
}

(async () => {
  const force = process.argv.length > 2 && process.argv[2] == "--force";
  if (force) console.log("Forcing update!");

  try {
    // Make sure the user has admin permissions before making changes to Firestore.
    // NOTE: this requirement is implemented as a strict rule in Firestore (Cloud Firestore > Rules tab),
    // so writes will be automatically denied if the user isn't an admin.
    // The checks in this script are just for convenience so that we don't output a bunch of confusing errors.
    const [email, password] = [process.env.FIREBASE_EMAIL, process.env.FIREBASE_PASSWORD];
    await auth.signInWithEmailAndPassword(email, password);
    const token = auth.currentUser.uid;
    const response = await db.collection('users').doc(token).get();
    if (!response.exists) {
      console.error(`The user ${email} does not have an entry in the 'users' collection of Firestore.`
        + " They must be added as an Admin in order to make edits.");
    }
    else if (!response.data().isAdmin) {
      console.error(`The user ${email} exists but is not authorized to make edits to Firestore.`);
    }
    else {
      console.log(`Signed in successfully as ${email}. Checking for changes...`);

      // Sync the following Airtable tables with their collections in Firestore
      await Promise.all([
        checkAndUpdate('Sections', 'sections', processSections, force, 'ID'),
        checkAndUpdate('Resources', 'resources', processResources, force),
        checkAndUpdate('Playlists', 'lessons', processLessons, force),
        checkAndUpdate('Topics', 'topics', processTopics, force),
        checkAndUpdate('Troubleshooting', 'troubleshooting', processTroubleshooting, force, 'ID'),
        checkAndUpdate('Answer Options', 'answerOptions', processAnswerOptions, force, 'ID'),
      ]);
    }
  }
  catch (error) {
    console.error("An error occurred while logging in:", error);
    return;
  }
  finally {
    process.exit();
  }
})();


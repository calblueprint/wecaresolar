const firebase = require('firebase');
const _ = require('lodash');
const { ArgumentParser } = require('argparse');

// TODO: put these defaults (for Airtable fields that aren't filled in) in a consistent place.
// Some of the defaults are in loadInitialState.ts right now instead
const DEFAULT_TOPIC_COLOR = 'Gray';

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
  apiKey: process.env.AIRTABLE_API_KEY
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
const GRACE_PERIOD = 10;

const airtableDidChange = (tableName) => {
  /**
   * Checks whether the given table in Airtable has changed since the last
   * successful Firestore upload.
   *
   * (To save $, we don't make requests to Firebase unless something has changed)
   */
  return new Promise((resolve, reject) => {
    const didChange = false;

    base(tableName)
      .select()
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            const lastModifiedTime = new Date(record.get('Last Modified'));
            const lastUploadTime = new Date(
              record.get('Last Firestore Upload')
            );

            // Table is considered modified if any record:
            // - Is new and marked "published"
            // - Is old and has been modified since the last upload (whether or not it is published)
            if (
              (lastUploadTime == 'Invalid Date' && record.get('Published')) ||
              lastModifiedTime - lastUploadTime > GRACE_PERIOD * 1000
            ) {
              console.log(
                `Detected Change in ${tableName}:`,
                lastUploadTime,
                lastModifiedTime,
                lastModifiedTime - lastUploadTime
              );
              resolve(true);
            }
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(false);
          }
        }
      );
  });
};

const convertFromAirtable = (tableName, processFn, key = 'Title') => {
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
    base(tableName)
      .select()
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            const published = record.get('Published');
            origRecords.push(record);
            if (!published) return;
            result[record.get(key)] = processFn(record);
          });

          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve([result, origRecords]);
          }
        }
      );
  });
};

const uploadToFirebase = async (collectionName, resources) => {
  /**
   * Uploads the preprocessed resources to the given collection in Firestore.
   * The collection is REPLACED ENTIRELY by the new resources — this means any old
   * documents in that Firestore collection will be deleted!
   */
  console.log(resources);

  // Deletion and upload done in a single transaction to guarantee
  // that either everything is updated successfully, or nothing happens.
  const batch = db.batch();

  const querySnapshot = await db.collection(collectionName).get();
  const queries = [];
  querySnapshot.forEach((doc) => {
    queries.push(
      db
        .collection(collectionName)
        .doc(doc.id)
        .delete()
        .then(() => {
          console.log(
            `Successfully deleted id='${doc.id}' from ${collectionName}.`
          );
          return true;
        })
        .catch((error) => {
          console.error(
            `Error removing document id='${doc.id} from ${collectionName}:'`,
            error
          );
          return false;
        })
    );
  });
  await Promise.all(queries);

  console.log('Done deleting!');

  const uploads = [];
  for (const [id, resource] of Object.entries(resources)) {
    uploads.push(
      db
        .collection(collectionName)
        .doc(id)
        .set(resource)
        .then(() => {
          console.log(`Successfully wrote '${id}' to ${collectionName}.`);
          return true;
        })
        .catch((error) => {
          console.log(`Error writing '${id}':`, error);
          return false;
        })
    );
  }

  await Promise.all(uploads);
  await batch.commit();

  return true;
};

const updateAirtableTimes = (tableName, origRecords, uploadTime) => {
  const requests = [];
  _.chunk(origRecords, 10).forEach((recordChunk) => {
    requests.push(
      new Promise((resolve, reject) => {
        base(tableName).update(
          recordChunk.map((record) => {
            return {
              id: record.getId(),
              fields: {
                'Last Firestore Upload': uploadTime
              }
            };
          }),
          function (err, records) {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(records);
            }
          }
        );
      })
    );
  });
  return Promise.all(requests);
};

const getImageUrl = (record) => {
  /**
   * Helper function to figure out what image URL to retrieve from this record.
   *
   * If there is something in the "Image Upload" field, it should have priority
   * over the "Image URL" field.
   *
   * (Eventually, we should transition to having all of our images uploaded directly
   * to Airtable rather than being listed as URLs)
   */
  const imageUpload = record.get('Image Upload');
  const imageUrl =
    (imageUpload ? imageUpload[0].url : record.get('Image URL')) || '';
  return imageUrl;
};

// =====================================================
// Specifying desired Airtable => Firestore formats
// =====================================================

const processResources = (record) => {
  const title = record.get('Title');
  const type = record.get('Type');
  const tags = (record.get('Topic Titles') || []).map((title) =>
    db.collection('topics').doc(title)
  );

  let data;
  if (type === 'Video') {
    data = {
      preview: record.get('Preview') || '',
      watchUrl: record.get('Watch URL') || '',
      downloadUrl: record.get('Download URL') || '',
      imageUrl: getImageUrl(record) || ''
    };
  } else if (type === 'Article') {
    data = {
      preview: record.get('Preview') || '',
      sections: (record.get('Section IDs') || []).map((id) =>
        db.collection('sections').doc(String(id))
      )
    };
  } else {
    console.err('WARNING: Unrecognized resource type', type);
  }

  return (
    title,
    {
      title,
      type,
      tags,
      data
    }
  );
};

const processSections = (record) => {
  const title = record.get('Title');
  const label = record.get('Label');
  const text = record.get('Text');
  const imageUrl = getImageUrl(record);

  let result = {};
  if (title) result['title'] = title;
  if (label) result['label'] = label;
  if (imageUrl) result['imageUrl'] = imageUrl;
  if (text) result['text'] = text;
  return result;
};

const processTroubleshooting = (record) => {
  const id = record.get('ID');
  const question = record.get('Question');
  const tag = record.get('Tag');
  const description = record.get('Description') || '';
  const sections = (record.get('Section IDs') || []).map((id) =>
    db.collection('sections').doc(String(id))
  );
  const answerOptions = (record.get('Answer Option IDs') || []).map((id) =>
    db.collection('answerOptions').doc(String(id))
  );

  return {
    id,
    question,
    tag,
    description,
    sections,
    answerOptions
  };
};

const processAnswerOptions = (record) => {
  const id = record.get('ID');
  const text = record.get('Text');
  const style = record.get('Style');

  const followupName = record.get('Follow-up Question Name');
  const followupQuestion = followupName
    ? db.collection('troubleshooting').doc(followupName[0])
    : '';
  const triggerUrl = record.get('Trigger URL') || '';

  return {
    id,
    text,
    style,
    followupQuestion,
    triggerUrl
  };
};

const processLessons = (record) => {
  const title = record.get('Title');
  const description = record.get('Description');
  const objectives = record
    .get('Objectives')
    .split('\n')
    .map((objective) => objective.substring(2));
  const resourceIDs = record
    .get('Resource Titles')
    .map((title) => db.collection('resources').doc(title));
  return {
    title,
    description,
    objectives,
    resourceIDs
  };
};

const processTopics = (record) => {
  const name = record.get('Title');
  const description = record.get('Description');
  const imageUrl = getImageUrl(record);
  const suitcaseCoordinates = record.get('Suitcase coordinates');
  const color = record.get('Color') || DEFAULT_TOPIC_COLOR;
  const tbPage = record.get('Troubleshooting Page ID');
  const troubleshootingPage = tbPage
    ? db.collection('troubleshooting').doc(tbPage[0])
    : '';

  return {
    name,
    description,
    imageUrl,
    suitcaseCoordinates,
    color,
    troubleshootingPage
  };
};

// =====================================================
// Main updating logic
// =====================================================

const checkAndUpdate = async (
  tableName,
  collectionName,
  processFn,
  force = false,
  key = 'Title',
  dryRun = false
) => {
  if (force) {
    console.log('Forcing update.');
  }

  /**
   * Checks if `tableName` in Airtable has changed; if so,
   * will upload all of its data to `collectionName` in Firestore.
   */
  if ((await airtableDidChange(tableName)) || force) {
    const uploadTime = Date.now();
    const [data, origRecords] = await convertFromAirtable(
      tableName,
      processFn,
      key
    );

    if (dryRun) {
      console.log('Dry run. Would have uploaded the following to Firebase:');
      console.log(data);
    } else {
      const result = await uploadToFirebase(collectionName, data);
      if (result) {
        await updateAirtableTimes(tableName, origRecords, uploadTime);
        console.log(`Updated Airtable times for ${tableName}.`);
      }
      console.log(`(SUCCESS) Done making all changes to ${collectionName}!!`);
    }
  } else {
    console.log(`No recent changes to ${tableName}. Skipping update.`);
  }
};

(async () => {
  const parser = new ArgumentParser({
    description: 'Populate Cloud Firestore with the content in Airtable.'
  });
  parser.addArgument(['-f', '--force'], {
    action: 'storeTrue',
    defaultValue: false,
    help: 'Forces an update, even if there are no detected changes in Airtable.'
  });
  parser.addArgument(['-d', '--dry'], {
    action: 'storeTrue',
    defaultValue: false,
    help:
      'Dry run: prints what the updates would be, but does not actually modify Airtable/Firebase. (for debugging purposes)'
  });
  const args = parser.parseArgs();

  try {
    // Make sure the user has admin permissions before making changes to Firestore.
    // NOTE: this requirement is implemented as a strict rule in Firestore (Cloud Firestore > Rules tab),
    // so writes will be automatically denied if the user isn't an admin.
    // The checks in this script are just for convenience so that we don't output a bunch of confusing errors.
    const [email, password] = [
      process.env.FIREBASE_EMAIL,
      process.env.FIREBASE_PASSWORD
    ];
    await auth.signInWithEmailAndPassword(email, password);
    const token = auth.currentUser.uid;
    const response = await db.collection('users').doc(token).get();
    if (!response.exists) {
      console.error(
        `The user ${email} does not have an entry in the 'users' collection of Firestore.` +
          ' They must be added as an Admin in order to make edits.'
      );
    } else if (!response.data().isAdmin) {
      console.error(
        `The user ${email} exists but is not authorized to make edits to Firestore.`
      );
    } else {
      console.log(
        `Signed in successfully as ${email}. Checking for changes...`
      );

      // Sync the following Airtable tables with their collections in Firestore
      await Promise.all([
        checkAndUpdate(
          'Sections',
          'sections',
          processSections,
          args.force,
          'ID',
          args.dry
        ),
        checkAndUpdate(
          'Resources',
          'resources',
          processResources,
          args.force,
          'Title',
          args.dry
        ),
        checkAndUpdate(
          'Playlists',
          'lessons',
          processLessons,
          args.force,
          'Title',
          args.dry
        ),
        checkAndUpdate(
          'Topics',
          'topics',
          processTopics,
          args.force,
          'Title',
          args.dry
        ),
        checkAndUpdate(
          'Troubleshooting',
          'troubleshooting',
          processTroubleshooting,
          args.force,
          'ID',
          args.dry
        ),
        checkAndUpdate(
          'Answer Options',
          'answerOptions',
          processAnswerOptions,
          args.force,
          'ID',
          args.dry
        )
      ]);
    }
  } catch (error) {
    console.error('An error occurred while logging in:', error);
    return;
  } finally {
    process.exit();
  }
})();

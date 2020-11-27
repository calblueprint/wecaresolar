const firebase = require('firebase');

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

const Airtable = require('Airtable');
require('dotenv').config();

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base('apprKUR7mFdmFaiLm');

const convertFromAirtable = (tableName, processFn) => {
  return new Promise((resolve, reject) => {
    const result = {};
    base(tableName).select().eachPage(function page(records, fetchNextPage) {
      records.forEach(record => {
        const published = record.get('Published');
        if (!published) return;
        result[record.get('Title')] = processFn(record);
      });
  
      fetchNextPage();
    }, function done(err) {
      if (err) {
        console.error(err);
        reject(err);
      }
      else {
        resolve(result);
      }
    });
  });
};

const uploadToFirebase = async (collectionName, resources) => {
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
      console.log(`Successfully wrote '${resource.title}' to ${collectionName}.`);
      return true;
    }).catch((error) => {
      console.log(`Error writing '${resource.title}':`, error);
      return false;
    }));
  }
  await Promise.all(uploads);

  await batch.commit();
  console.log(`(SUCCESS) Done making all changes to ${collectionName}!!`);
};

// =====================================================================================

const processResources = (record) => {
  const title = record.get('Title');
  const type = record.get('Type');
  const tags = record.get('Tags');
  const preview = record.get('Preview');
  const watchUrl = record.get('Watch URL');
  const downloadUrl = record.get('Download URL');
  return title, {
    title,
    type,
    tags,
    data: {
      watchUrl,
      downloadUrl,
      preview,
    },
  };
};

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

const uploadEverything = async () => {
  const resources = await convertFromAirtable('Resources', processResources);
  uploadToFirebase('resources', resources);

  const lessons = await convertFromAirtable('Playlists', processLessons);
  uploadToFirebase('lessons', lessons);
}

uploadEverything();

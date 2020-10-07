import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyARYFXy3DySHolS6t8fL0UsgfyTky_eTXA',
    authDomain: 'we-care-solar-c3e5f.firebaseapp.com',
    databaseURL: 'https://we-care-solar-c3e5f.firebaseio.com',
    projectId: 'we-care-solar-c3e5f',
    storageBucket: 'we-care-solar-c3e5f.appspot.com',
    messagingSenderId: '963041613875',
    appId: '1:963041613875:web:96e9b6562a9a7c4cd76b46',
    measurementId: 'G-N48ZSWDGHL'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };

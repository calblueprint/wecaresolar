import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store, persistor } from './store/reducers';
import { PersistGate } from 'redux-persist/integration/react';
import { Store } from 'idb-keyval';

import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/firestore';
import { initializePushNotifications } from './pushNotifications';
import { loadInitialState } from './store/loadInitialState';

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
export const messaging = firebase.messaging.isSupported()
  ? firebase.messaging()
  : null;
export const db = firebase.firestore();

db.enablePersistence()
  .then(() => {
    console.log('[Firebase] Enabled persistence for Cloud Firestore!');
  })
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.log(
        '[Firebase] ERROR: Multiple tabs open, ' +
          'persistence can only be enabled in one tab at a a time.'
      );
    } else if (err.code == 'unimplemented') {
      console.log(
        '[Firebase] ERROR: The current browser does not support all of the ' +
          'features required to enable persistence'
      );
    }
  });

if (firebase.messaging.isSupported()) {
  initializePushNotifications();
} else {
  console.log(
    'Warning: On a device that does not supported Firebase Messaging.' +
      'Will skip setting up push notifications.'
  );
}

loadInitialState();

// Set up IndexedDB store for caching videos
export const videoStore = new Store('Resources', 'VideoStore');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

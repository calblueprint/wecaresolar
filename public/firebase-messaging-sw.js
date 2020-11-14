// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('/__/firebase/7.24.0/firebase-app.js');
// importScripts('/__/firebase/7.24.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyARYFXy3DySHolS6t8fL0UsgfyTky_eTXA",
  authDomain: "we-care-solar-c3e5f.firebaseapp.com",
  databaseURL: "https://we-care-solar-c3e5f.firebaseio.com",
  projectId: "we-care-solar-c3e5f",
  storageBucket: "we-care-solar-c3e5f.appspot.com",
  messagingSenderId: "963041613875",
  appId: "1:963041613875:web:96e9b6562a9a7c4cd76b46",
  measurementId: "G-N48ZSWDGHL"
});
const messaging = firebase.messaging();
console.log("Loaded messaging:", messaging)

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START on_background_message]
// messaging.onBackgroundMessage((payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/public/logo192.png',
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
// [END on_background_message]

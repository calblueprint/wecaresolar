/**
 * This file handles all push notification operations using Firebase's Cloud Messaging.
 *
 * The only exposed function is `retrievePushToken()`, which should be called once when
 * the app first loads.
 *
 * This will take care of the following process:
 * - If notifications haven't been enabled, ask the user for permission first
 * - Retrieves messaging token, which will either make a request to Firebase (if this
 *   is the first time) or use the cached value (if previously enabled)
 * - Save the token to the server so that we can use it to send the user notifications
 *   or remove them from our list
 *
 * TODO(kevintli): The `onMessage` callback will run if a notification is received while the app is
 * already open. In the future, we might want to display a custom banner message for this.
 *
 * Otherwise if the app is in the background, it will automatically display a notification
 * upon receiving a push.
 */

import { messaging } from './index';

const VAPID_KEY =
  'BPAT4hTb8W38zuy-EeGDA9kaGdjWgyBitHYVcy38kPPfB_ladS7pxzksyUgXKEMevOj0_fWuXzgjiTpjGaS6MpQ';

export const initializePushNotifications = () => {
  // Called when a notification is received while the app is in the foreground,
  // or the user clicks on a notification that was sent while in the background
  messaging.onMessage(payload => {
    console.log('[firebase-messaging-sw.js] Received message in app ', payload);
  });
  retrievePushToken();
};

// Retrieves the push token for the current user's device.
// If no token exists, will request push permission first, then automatically call this function again.
const retrievePushToken = () => {
  console.log('Attempting to retrieve push token...');
  messaging
    .getToken({ vapidKey: VAPID_KEY })
    .then(currentToken => {
      if (currentToken) {
        console.log('Token exists:', currentToken);
        sendTokenToServer(currentToken);
      } else {
        // Show permission request.
        console.log(
          'No registration token available. Request permission to generate one.'
        );
        // Show permission UI.
        requestPushPermission();
        setTokenSentToServer(false);
      }
    })
    .catch(err => {
      console.log('An error occurred while retrieving token. ', err);
      setTokenSentToServer(false);
    });
};

// Requests permission to display push notifications.
// If granted, will automatically retrieve and save the resulting token through `retrieveToken()`.
const requestPushPermission = () => {
  if (Notification.permission === 'granted') {
    console.log('Already granted push permissions!');
  } else if (Notification.permission === 'denied') {
    console.log(
      'Previously denied push permissions. Cannot send notifications!'
    );
  } else {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        retrievePushToken();
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }
};

// Send the registration token your application server, so that it can:
// - send messages back to this app
// - subscribe/unsubscribe the token from topics
const sendTokenToServer = currentToken => {
  if (!isTokenSentToServer()) {
    console.log('Sending token to server...');
    // TODO: save this to the user in firebase. For now, we're just storing it locally
    window.localStorage.setItem('notification-token', currentToken);
    setTokenSentToServer(true);
  } else {
    console.log(
      "Token already sent to server so won't send it again " +
        'unless it changes'
    );
  }
};

const isTokenSentToServer = () => {
  return window.localStorage.getItem('pushTokenSentToServer') === '1';
};
const setTokenSentToServer = sent => {
  window.localStorage.setItem('pushTokenSentToServer', sent ? '1' : '0');
};

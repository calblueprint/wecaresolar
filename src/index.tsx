import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/reducers';

import { retrievePushToken } from './pushNotifications';
import { Store } from 'idb-keyval';

export const videoStore = new Store("Resources", "VideoStore");
export const platform = getMobileOperatingSystem();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// TODO: best place to put this?
retrievePushToken();

serviceWorker.register();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    alert("WINDOWS")
    return "Windows";
  }

  if (/android/i.test(userAgent)) {
    alert("ADJRPDO")

    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    alert("OOS")

    return "iOS";
  }
  alert("asdf")
  return "unknown";
}
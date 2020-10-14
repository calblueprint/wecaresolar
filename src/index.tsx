import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';


const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

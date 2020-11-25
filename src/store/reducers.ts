import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import resourcesReducer from './resourcesSlice';
import lessonsReducer from './lessonsSlice';
import metadataReducer from './metadataSlice';

const persistedReducer = persistReducer(
  { key: 'root', storage },
  combineReducers({
    resources: resourcesReducer,
    lessons: lessonsReducer,
    metadata: metadataReducer
  })
);

export const store = configureStore({
  reducer: persistedReducer
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

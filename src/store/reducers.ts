import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import resourcesReducer from './resourcesSlice';
import sectionsSlice from './sectionsSlice';
import lessonsReducer from './lessonsSlice';
import topicsReducer from './topicsSlice';
import metadataReducer from './metadataSlice';
import troubleshootingSlice from './troubleshootingSlice';

const persistedReducer = persistReducer(
  { key: 'root', storage },
  combineReducers({
    resources: resourcesReducer,
    sections: sectionsSlice,
    lessons: lessonsReducer,
    topics: topicsReducer,
    metadata: metadataReducer,
    troubleshoot: troubleshootingSlice,
  })
);

export const store = configureStore({
  reducer: persistedReducer
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

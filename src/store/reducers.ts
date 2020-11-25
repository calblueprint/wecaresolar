import { configureStore } from '@reduxjs/toolkit';

import resourcesReducer from './resourcesSlice';
import lessonsReducer from './lessonsSlice';
import metadataReducer from './metadataSlice';

const store = configureStore({
  reducer: {
    resources: resourcesReducer,
    lessons: lessonsReducer,
    metadata: metadataReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

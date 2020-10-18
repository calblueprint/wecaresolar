import { configureStore } from '@reduxjs/toolkit';

import resourcesReducer from './resourcesSlice';
import lessonsReducer from './lessonsSlice';

const store = configureStore({
  reducer: {
    resources: resourcesReducer,
    lessons: lessonsReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

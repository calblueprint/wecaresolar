import { configureStore } from '@reduxjs/toolkit';

import resourcesReducer from './resourcesSlice';
import lessonsReducer from './lessonsSlice';
import topicsReducer from './topicSlice';

const store = configureStore({
  reducer: {
    resources: resourcesReducer,
    lessons: lessonsReducer,
    topics: topicsReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

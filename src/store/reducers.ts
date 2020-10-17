import { configureStore } from '@reduxjs/toolkit';

import resourcesReducer from './resourcesSlice';

export default configureStore({
  reducer: {
    resources: resourcesReducer
  }
});

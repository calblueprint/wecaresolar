import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_RESOURCES } from './initialStates';

export type ResourcesSlice = {
  [key: number]: Resource;
};

export type Resource = {
  type: string;
  tags: string[];
  data: VideoData | ArticleData;
  isFinished: boolean;
  isCached: boolean;
  isFavorited: boolean;
};

export type VideoData = {
  watchUrl: string;
  downloadUrl: string;
  fileSize: number;
  duration: number;
};

export type ArticleData = {
  textUrl: string;
  fileSize: number;
};

export const resourcesSlice = createSlice({
  name: 'resources',
  initialState: INITIAL_RESOURCES,
  reducers: {
    setResourceIsFinished(state, action) {
      const { id, isFinished } = action.payload;
      state[id].isFinished = isFinished;
    },
    setResourceIsCached(state, action) {
      const { id, isCached } = action.payload;
      state[id].isCached = isCached;
    },
    setResourceIsFavorited(state, action) {
      const { id, isFavorited } = action.payload;
      state[id].isFavorited = isFavorited;
    }
  }
});

export default resourcesSlice.reducer;

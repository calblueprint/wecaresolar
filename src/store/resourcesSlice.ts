import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_RESOURCES } from './initialStates';
import { RootState } from './reducers';

export type ResourcesSlice = {
  [key: number]: Resource;
};

export type Resource = {
  title: string;
  type: string;
  tags: string[];
  data: VideoData | ArticleData | any;
  isFinished: boolean;
  isCached: boolean;
  isFavorited: boolean;
};

export type VideoData = {
  watchUrl: string;
  downloadUrl: string;
  fileSize: number;
  duration: number;
  preview: string;
};

export type ArticleData = {
  textUrl: string;
  fileSize: number;
  preview: string;
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

export const selectFavoritedResources = (state: RootState) =>
  Object.keys(state.resources as ResourcesSlice)
    .filter((id) => state.resources[(id as unknown) as number].isFavorited)
    .reduce<ResourcesSlice>((res, key) => {
      res[(key as unknown) as number] =
        state.resources[(key as unknown) as number];
      return res;
    }, {});

export const {
  setResourceIsFinished,
  setResourceIsCached,
  setResourceIsFavorited
} = resourcesSlice.actions;
export default resourcesSlice.reducer;

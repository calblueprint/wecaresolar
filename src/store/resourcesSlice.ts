import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_RESOURCES } from './initialStates';
import { RootState } from './reducers';
import { updateValues } from './reduxUtils';

export type ResourcesSlice = {
  [key: string]: Resource;
};

export type Resource = {
  type: string;
  title: string;
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
  preview: string;
};

export type ArticleData = {
  textUrl: string;
  fileSize: number;
  preview: string;
};

const DEFAULT_FIELDS = {
  isCached: false,
  isFavorited: false,
  isFinished: false,
};

export const resourcesSlice = createSlice({
  name: 'resources',
  initialState: INITIAL_RESOURCES,
  reducers: {
    updateResources(state, action) {
      updateValues(state, action.payload, DEFAULT_FIELDS);
    },
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
  updateResources,
  setResourceIsFinished,
  setResourceIsCached,
  setResourceIsFavorited
} = resourcesSlice.actions;
export default resourcesSlice.reducer;

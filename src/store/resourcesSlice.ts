import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_RESOURCES } from './initialStates';
import { RootState } from './reducers';
import { refreshValues } from './reduxUtils';

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

type ResourceIsFinishedPayload = {
  id: string;
  isFinished: boolean;
};

type ResourceIsCachedPayload = {
  id: string;
  isCached: boolean;
};

type ResourceIsFavoritedPayload = {
  id: string;
  isFavorited: boolean;
};

export const resourcesSlice = createSlice({
  name: 'resources',
  initialState: INITIAL_RESOURCES,
  reducers: {
    refreshResources(state, action: PayloadAction<ResourcesSlice>) {
      refreshValues(state, action.payload, DEFAULT_FIELDS);
    },
    setResourceIsFinished(state, action: PayloadAction<ResourceIsFinishedPayload>) {
      const { id, isFinished } = action.payload;
      state[id].isFinished = isFinished;
    },
    setResourceIsCached(state, action: PayloadAction<ResourceIsCachedPayload>) {
      const { id, isCached } = action.payload;
      state[id].isCached = isCached;
    },
    setResourceIsFavorited(state, action: PayloadAction<ResourceIsFavoritedPayload>) {
      const { id, isFavorited } = action.payload;
      state[id].isFavorited = isFavorited;
    }
  }
});

export const selectFavoritedResources = (state: RootState) =>
  Object.keys(state.resources)
    .filter((id) => state.resources[id].isFavorited)
    .reduce<ResourcesSlice>((res, key) => {
      res[key] = state.resources[key];
      return res;
    }, {});

export const {
  refreshResources,
  setResourceIsFinished,
  setResourceIsCached,
  setResourceIsFavorited
} = resourcesSlice.actions;
export default resourcesSlice.reducer;

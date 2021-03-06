import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus } from './loadInitialState';

export type MetadataSlice = {
  lastServerRefreshTime: number;
  lastRefreshStatus: FetchStatus;
  didInitialLoad: boolean;
};

const INITIAL_METADATA = {
  lastServerRefreshTime: 0,
  lastRefreshStatus: 'FAILURE',
  didInitialLoad: false
};

export const metadataSlice = createSlice({
  name: 'metadata',
  initialState: INITIAL_METADATA,
  reducers: {
    onFetchResult: {
      reducer: (state, action) => {
        const { time, result } = action.payload;
        state.lastRefreshStatus = result;
        if (result === FetchStatus.SuccessFromServer) {
          state.lastServerRefreshTime = time;
        }
        state.didInitialLoad = true;
      },
      prepare: (result: FetchStatus) => {
        const time = Date.now();
        return { payload: { result, time }, meta: null, error: null };
      }
    }
  }
});

export const { onFetchResult } = metadataSlice.actions;
export default metadataSlice.reducer;

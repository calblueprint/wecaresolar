import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { INITIAL_TOPICS } from './initialStates';
import { refreshValues } from './reduxUtils';

export type TopicsSlice = {
  [key: string]: Topic;
};

export type Topic = {
  name: string;
  description: string;
  imageUrl: string;
};

const DEFAULT_FIELDS = {};

export const topicsSlice = createSlice({
  name: 'topics',
  // initialState: INITIAL_TOPICS,
  initialState: {},
  reducers: {
    refreshTopics(state, action: PayloadAction<TopicsSlice>) {
      refreshValues(state, action.payload, DEFAULT_FIELDS);
    }
  }
});

export const { refreshTopics } = topicsSlice.actions;
export default topicsSlice.reducer;

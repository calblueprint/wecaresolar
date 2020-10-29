import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_TOPICS } from './initialStates';

export type TopicsSlice = {
  [key: number]: Topic;
};

export type Topic = {
  name: string;
  description: string;
  url: string;
  isFinished: boolean;
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: INITIAL_TOPICS,
  reducers: {
    setTopicIsFinished(state, action) {
      const { id, isFinished } = action.payload;
      state[id].isFinished = isFinished;
    }
  }
});

export const { setTopicIsFinished } = topicsSlice.actions;
export default topicsSlice.reducer;

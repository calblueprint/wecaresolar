import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_TOPICS } from './initialStates';

export type TopicsSlice = {
  [key: number]: Topic;
};

export type Topic = {
  name: string;
  description: string;
  imageUrl: string;
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: INITIAL_TOPICS,
  reducers: {}
});

export default topicsSlice.reducer;

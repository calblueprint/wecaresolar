import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_HELP } from './initialStates';

export type HelpSlice = {
  [key: string]: Help;
};

export type Help = {
  parent: string | any;
  title: string;
  description: string;
  options: {
    [key: string]: string;
  };
};

export const helpSlice = createSlice({
  name: 'troubleshooting',
  initialState: INITIAL_HELP
});

export const { setLessonIsFinished } = helpSlice.actions;
export default helpSlice.reducer;

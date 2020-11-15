import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_HELP } from './initialStates';

export type HelpSlice = {
  [key: number]: Help;
};

export type Help = {
  parent: Help | any;
  title: string;
  description: string;
  options: {
    [key: string]: Help;
  };
};

export const helpSlice = createSlice({
  name: 'troubleshooting',
  initialState: INITIAL_HELP,
});

export const { setLessonIsFinished } = helpSlice.actions;
export default helpSlice.reducer;

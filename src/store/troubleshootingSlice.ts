import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { refreshValues } from './reduxUtils';
import { INITIAL_TROUBLESHOOTING } from './initialStates';
import { SectionsSlice } from './sectionsSlice';

export type TroubleshootingSlice = {
  [key: string]: TroubleshootingStep;
};

export type AnswerOption = {
  text: string;
  color: string;
  followupId: keyof TroubleshootingSlice;
};

export type TroubleshootingStep = {
  question: string;
  description: string;
  sections: (keyof SectionsSlice)[];
  answerOptions: AnswerOption[];
};

export const troubleshootingSlice = createSlice({
  name: 'troubleshooting',
  initialState: INITIAL_TROUBLESHOOTING,
  reducers: {
    refreshTroubleshooting(state, action: PayloadAction<TroubleshootingSlice>) {
      refreshValues(state, action.payload);
    }
  }
});

export const { refreshTroubleshooting } = troubleshootingSlice.actions;
export default troubleshootingSlice.reducer;

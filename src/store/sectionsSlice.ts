import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { refreshValues } from './reduxUtils';
import { INITIAL_SECTIONS } from './initialStates';

export type SectionsSlice = {
  [key: string]: Section;
};

export type Section = {
  title: string;
  label?: string;
  imageUrl?: string;
  text?: string;
};

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState: INITIAL_SECTIONS,
  reducers: {
    refreshSections(state, action: PayloadAction<SectionsSlice>) {
      refreshValues(state, action.payload);
    },
  }
});

export const {
  refreshSections,
} = sectionsSlice.actions;
export default sectionsSlice.reducer;

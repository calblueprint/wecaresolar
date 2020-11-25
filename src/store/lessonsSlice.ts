import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_LESSONS } from './initialStates';
import { updateValues } from './reduxUtils';

export type LessonsSlice = {
  [key: string]: Lesson;
};

export type Lesson = {
  title: string;
  description: string;
  objectives: string[];
  resourceIDs: string[];
  isFinished: boolean;
};

const DEFAULT_FIELDS = {
  isFinished: false,
};

export const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: INITIAL_LESSONS,
  reducers: {
    updateLessons(state, action) {
      updateValues(state, action.payload, DEFAULT_FIELDS);
    },
    setLessonIsFinished(state, action) {
      const { id, isFinished } = action.payload;
      state[id].isFinished = isFinished;
    }
  }
});

export const { updateLessons, setLessonIsFinished } = lessonsSlice.actions;
export default lessonsSlice.reducer;

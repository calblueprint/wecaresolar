import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_LESSONS } from './initialStates';
import { refreshValues } from './reduxUtils';

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
  isFinished: false
};

type LessonIsFinishedPayload = {
  id: string;
  isFinished: boolean;
};

export const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: INITIAL_LESSONS,
  reducers: {
    refreshLessons(state, action: PayloadAction<LessonsSlice>) {
      refreshValues(state, action.payload, DEFAULT_FIELDS);
    },
    setLessonIsFinished(state, action: PayloadAction<LessonIsFinishedPayload>) {
      const { id, isFinished } = action.payload;
      state[id].isFinished = isFinished;
    }
  }
});

export const { refreshLessons, setLessonIsFinished } = lessonsSlice.actions;
export default lessonsSlice.reducer;

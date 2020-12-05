import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_LESSONS } from './initialStates';

export type LessonsSlice = {
  [key: number]: Lesson;
};

export type Lesson = {
  title: string;
  description: string;
  objectives: string[];
  resourceIds: number[];
  isFinished: boolean;
};

export const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: INITIAL_LESSONS,
  reducers: {
    setLessonIsFinished(state, action) {
      const { id, isFinished } = action.payload;
      state[id].isFinished = isFinished;
    }
  }
});

export const { setLessonIsFinished } = lessonsSlice.actions;
export default lessonsSlice.reducer;

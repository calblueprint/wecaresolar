import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_LESSONS } from './initialStates';

export type LessonsSlice = {
  [key: number]: Lesson;
};

export type Lesson = {
  description: string;
  objectives: string[];
  resourceIds: number[];
  isFinished: boolean;
};

export const lessonsSlice = createSlice({
  name: 'resources',
  initialState: INITIAL_LESSONS,
  reducers: {
    setLessonIsFinished(state, action) {
      const { id, isFinished } = action.payload;
      state[id].isFinished = isFinished;
    }
  }
});

export default lessonsSlice.reducer;

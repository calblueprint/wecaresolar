import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_USER } from './initialStates';

export type UserSlice = {
  [key: number]: User;
};

export type User = {
  userId: string;
  favorited: number[];
  downloaded: number[];
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_USER,
  reducers: {
    addFavorited(state, action) {
      const { user, id } = action.payload;
      state[user].favorited.push(id);
    },
    removeFavorited(state, action) {
      const { user, id } = action.payload;
      const index = state[user].favorited.indexOf(id);
      state[user].favorited.splice(index, 1);
    },
    addDownloaded(state, action) {
      const { user, id } = action.payload;
      state[user].downloaded.push(id);
    },
    removeDownloaded(state, action) {
      const { user, id } = action.payload;
      const index = state[user].downloaded.indexOf(id);
      state[user].downloaded.splice(index, 1);
    }
  }
});

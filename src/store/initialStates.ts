/**
 * Defines a few placeholder states with fake data for each of the reducer slices (resources, lessons, etc.).
 * This is for testing purposes only!! Ideally, we'd want to populate the Redux store with real data
 * from Firebase when the app first loads.
 */

import { LessonsSlice } from './lessonsSlice';
import { ResourcesSlice } from './resourcesSlice';
import { UserSlice } from './userSlice';

export const INITIAL_RESOURCES: ResourcesSlice = {
  17: {
    type: 'Video',
    tags: ['Fetal Doppler', 'Setup'],
    data: {
      watchUrl: 'https://youtube.com/watch?v=_______',
      downloadUrl: '<s3 link here>',
      fileSize: 13050, // File size in bytes
      duration: 67 // Video duration in seconds
    },
    isFinished: true, // QUESTION: once viewed, or manually mark finished?
    isCached: true,
    isFavorited: true
  },
  23: {
    type: 'Article',
    tags: ['Help what other topics are there'],
    data: {
      textUrl: '<cloud firestore or s3 link here>',
      fileSize: 13050 // QUESTION: file size on text resources?
    },
    isFinished: false, // QUESTION: once viewed, or manually mark finished?
    isCached: false, // QUESTION: allow caching text resources?
    isFavorited: true
  }
  // ...
};

export const INITIAL_LESSONS: LessonsSlice = {
  6: {
    description: 'A short description of this lesson',
    objectives: ['A list of', 'Things that the user', 'Will learn'],
    resourceIds: [3, 6, 8, 12],
    isFinished: false
  }
  // ...
};

export const INITIAL_USER: UserSlice = {
  0: {
    userId: '',
    favorited: [],
    downloaded: []
  }
  // ...
};

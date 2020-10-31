/**
 * Defines a few placeholder states with fake data for each of the reducer slices (resources, lessons, etc.).
 * This is for testing purposes only!! Ideally, we'd want to populate the Redux store with real data
 * from Firebase when the app first loads.
 */

import { LessonsSlice } from './lessonsSlice';
import { ResourcesSlice } from './resourcesSlice';
import { UserSlice } from './userSlice';

export const INITIAL_RESOURCES: ResourcesSlice = {
  3: {
    type: 'Video 3',
    title: 'How to use Thermometer',
    tags: ['Temperature', 'Setup'],
    data: {
      preview: 'this is a video preview ....',
      watchUrl: 'https://youtube.com/watch?v=_______',
      downloadUrl: '<s3 link here>',
      fileSize: 13050, // File size in bytes
      duration: 67 // Video duration in seconds
    },
    isFinished: true, // QUESTION: once viewed, or manually mark finished?
    isCached: true,
    isFavorited: true
  },
  8: {
    type: 'Article',
    title: 'Solar Installation',
    tags: ['power'],
    data: {
      preview: 'this is an article preview ....',
      textUrl: '<cloud firestore or s3 link here>',
      fileSize: 13050 // QUESTION: file size on text resources?
    },
    isFinished: false, // QUESTION: once viewed, or manually mark finished?
    isCached: false, // QUESTION: allow caching text resources?
    isFavorited: true
  },
  17: {
    type: 'Video 17',
    title: 'How to Use the Fetal Doppler',
    tags: ['Fetal Doppler', 'Setup'],
    data: {
      preview: 'this is a video preview ....',
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
    title: 'How to Use this very cool thing',
    tags: ['Help what other topics are there'],
    data: {
      preview: 'this is an article preview ....',
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
    title: 'Lesson 1',
    description: 'A short description of this lesson',
    objectives: ['A list of', 'Things that the user', 'Will learn'],
    resourceIds: [3, 8, 17, 23],
    isFinished: false
  },
  7: {
    title: 'Lesson 2',
    description: 'A short description of this lesson 2 ',
    objectives: ['A list of', 'Things that the user', 'Will learn'],
    resourceIds: [3],
    isFinished: false
  },
  8: {
    title: 'Lesson 3 with a very long title and much more',
    description: 'A short description of this lesson 2 ',
    objectives: ['A list of', 'Things that the user', 'Will learn'],
    resourceIds: [3, 8],
    isFinished: false
  },
  9: {
    title: 'Lesson 4 with a very long title and much more',
    description: 'A short description of this lesson 2 ',
    objectives: ['A list of', 'Things that the user', 'Will learn'],
    resourceIds: [1, 2, 4],
    isFinished: false
  },
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

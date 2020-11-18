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
    title: 'How to Use the Fetal Doppler',
    tags: ['Fetal Doppler', 'Setup'],
    data: {
      preview: 'this is a video preview ....',
      watchUrl:
        'https://www.youtube.com/watch?v=oMCKWkvGLLA',
      downloadUrl: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/68af8796-4a00-44c4-8e3e-b006d358bafe/1_v3SolarSuitcase_InstallationPlanning_%285%29.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201118T063037Z&X-Amz-Expires=86400&X-Amz-Signature=062bad74e216cd1ea00586ba6fa8ea86ab830da005844cfd3d596dcf2e87e329&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%221_v3SolarSuitcase_InstallationPlanning_%285%29.mp4%22",
      fileSize: 13050, // File size in bytes
      duration: 67 // Video duration in seconds
    },
    isFinished: true, // QUESTION: once viewed, or manually mark finished?
    isCached: false,
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

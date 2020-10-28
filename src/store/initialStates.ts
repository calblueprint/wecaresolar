/**
 * Defines a few placeholder states with fake data for each of the reducer slices (resources, lessons, etc.).
 * This is for testing purposes only!! Ideally, we'd want to populate the Redux store with real data
 * from Firebase when the app first loads.
 */

import { LessonsSlice } from './lessonsSlice';
import { ResourcesSlice } from './resourcesSlice';
import { UserSlice } from './userSlice';
import { TopicsSlice } from './topicsSlice';

export const INITIAL_RESOURCES: ResourcesSlice = {
  17: {
    type: 'Video',
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
    title: 'TROUBLED FETAL',
    tags: ['Fetal Doppler', 'Troubleshooting'],
    data: {
      preview: 'this is an article preview ....',
      textUrl: '<cloud firestore or s3 link here>',
      fileSize: 13050 // QUESTION: file size on text resources?
    },
    isFinished: false, // QUESTION: once viewed, or manually mark finished?
    isCached: false, // QUESTION: allow caching text resources?
    isFavorited: true
  },
  25: {
    type: 'Article',
    title: 'Doppler 101',
    tags: ['Fetal Doppler', 'Setup'],
    data: {
      preview: 'this is an article preview ....',
      textUrl: '<cloud firestore or s3 link here>',
      fileSize: 13050 // QUESTION: file size on text resources?
    },
    isFinished: false, // QUESTION: once viewed, or manually mark finished?
    isCached: false, // QUESTION: allow caching text resources?
    isFavorited: true
  },
  27: {
    type: 'Video',
    title: 'How to Batter Up Charger',
    tags: ['Battery Charger', 'Set Up'],
    data: {
      preview: 'this is a video preview ....',
      watchUrl: 'https://youtube.com/watch?v=_______',
      downloadUrl: '<s3 link here>',
      fileSize: 13050, // File size in bytes
      duration: 67 // Video duration in seconds
    },
    isFinished: false, // QUESTION: once viewed, or manually mark finished?
    isCached: false, // QUESTION: allow caching text resources?
    isFavorited: true
  },
  31: {
    type: 'Article',
    title: 'COMBUSTED BATTERIES',
    tags: ['Battery Charger', 'Troubleshooting'],
    data: {
      preview: 'this is an article preview ....',
      textUrl: '<cloud firestore or s3 link here>',
      fileSize: 13050 // QUESTION: file size on text resources?
    },
    isFinished: false, // QUESTION: once viewed, or manually mark finished?
    isCached: false, // QUESTION: allow caching text resources?
    isFavorited: true
  }
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

export const INITIAL_TOPICS: TopicsSlice = {
  12: {
    name: 'Fetal Doppler',
    description: 'This is the Fetal Doppler topic.',
    url:
      'https://ucc868501cde78db81d8a92f793e.previews.dropboxusercontent.com/p/thumb/AA_fJuTUr20-3y0p1X9FI1I1BMjd2vl3B0lzQyXo2Vjn4yrC2_xY0v2A5qRRjTR5rMiUjbf_VlrjNxkI_mET9-jFLEmF8LTrbsL-li1BoLJzCcZTNyq6kGk-kR3CeMlRAGD94_IwrjEq5-U9ItfeI5CCxCN-f2G8mVC65XR9RSk1DjW6o0vlk1kiP6YiS23mRWR2_-CEukLUMY8iofSK0-mS8h7gw_TZZabeYRkif8CDRrdZnk5tDYCC1-_QeMVK7ZwncMtGwHxFfIOKEyBlONwPLNHH7StR3m5M8GUYrDQ09Mfy8_zYZ_HfNnmAc-UO40xhe_HqZBewpXcOZOEGSH5vcmxe8KZidzRJEqyO_qeOog/p.jpeg?fv_content=true&size_mode=5',
    isFinished: false
  },
  13: {
    name: 'Battery Charger',
    description: 'This is the Fetal Doppler topic.',
    url:
      'https://uc6f56da5e05543d13574e7ac9b6.previews.dropboxusercontent.com/p/thumb/AA_3fGV4wxtrbv0YHA8tk3swiS_V3E9RahX0S011erCBcbalNMRdvpaSBMgkyjD6UHoioYGMp7TSW7I6wjJE3j_9hVkvf5_QnzpSA69Gt2UWNSyxCvYdjPwJS4vK9tidVxDt9SJkCBwbC_m8jdoLx6jJyxpcjyWTz0lbpuGY_70JYuQu2CNi-lOvzeOGEha4BUL4ktlXnJoik4ykThaKf_RPsGUKhMpgNT6Gq7tDolQ2x3XDqlUUYCqOSSeIKBxRKwMQWI2GAPQK7IZu89Iy7XjSN6Bjf9HKBgCClFmEXmH4vmTpk3qgfyOpBO48-PaWyYeYdz0_h8_zlS8yo8qi_E2-Ku6ruzGOk3Dw4088yrqpQA/p.jpeg?size=2048x1536&size_mode=3',
    isFinished: false
  }
};

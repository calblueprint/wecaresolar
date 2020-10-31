/**
 * Defines a few placeholder states with fake data for each of the reducer slices (resources, lessons, etc.).
 * This is for testing purposes only!! Ideally, we'd want to populate the Redux store with real data
 * from Firebase when the app first loads.
 */

import { LessonsSlice } from './lessonsSlice';
import { ResourcesSlice } from './resourcesSlice';
import { UserSlice } from './userSlice';

export const INITIAL_RESOURCES: ResourcesSlice = {
  1: {
    type: 'Video',
    title: 'irure nisi enim Lorem non',
    tags: ['mollit'],
    data: {
      preview:
        'Ad do officia tempor occaecat laboris non magna ea sint deserunt mollit.',
      fileSize: 27790,
      duration: 1536,
      watchUrl: 'https://youtube.com/api',
      downloadUrl: 'https://aws.link/'
    },
    isFinished: true,
    isCached: false,
    isFavorited: true
  },
  2: {
    type: 'Video',
    title: 'aliquip sunt ea sunt adipisicing',
    tags: ['consequat'],
    data: {
      preview:
        'Occaecat eiusmod deserunt sint aliqua mollit consequat consectetur in.',
      fileSize: 13254,
      duration: 2761,
      watchUrl: 'https://youtube.com/api',
      downloadUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: false,
    isFavorited: false
  },
  3: {
    type: 'Video',
    title: 'deserunt voluptate non ad amet',
    tags: ['veniam', 'culpa'],
    data: {
      preview: 'Sunt quis ea sint ea aute do consequat deserunt culpa commodo.',
      fileSize: 22435,
      duration: 1220,
      watchUrl: 'https://youtube.com/api',
      downloadUrl: 'https://aws.link/'
    },
    isFinished: true,
    isCached: false,
    isFavorited: true
  },
  4: {
    type: 'Video',
    title: 'pariatur voluptate id consectetur tempor',
    tags: ['amet', 'laborum', 'elit', 'excepteur', 'ad'],
    data: {
      preview:
        'Ipsum nostrud sit sunt laborum esse excepteur amet velit ullamco ipsum.',
      fileSize: 24583,
      duration: 1943,
      watchUrl: 'https://youtube.com/api',
      downloadUrl: 'https://aws.link/'
    },
    isFinished: true,
    isCached: true,
    isFavorited: false
  },
  5: {
    type: 'Video',
    title: 'commodo eiusmod aliquip sint cillum',
    tags: ['duis'],
    data: {
      preview:
        'Exercitation pariatur aliqua ad et dolore tempor id et pariatur laborum laborum.',
      fileSize: 22070,
      duration: 1691,
      watchUrl: 'https://youtube.com/api',
      downloadUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: false,
    isFavorited: false
  },
  6 : {
    "type": "Article",
    "title": "exercitation incididunt qui velit nostrud",
    "tags": [
      "officia",
      "minim"
    ],
    "data": {
      "preview": "Fugiat in velit nulla commodo mollit dolor.",
      "fileSize": 21204,
      "textUrl": "https://aws.link/"
    },
    "isFinished": false,
    "isCached": true,
    "isFavorited": false
  },
  7 : {
    "type": "Article",
    "title": "laborum ex eiusmod eu id",
    "tags": [
      "anim",
      "commodo",
      "Lorem",
      "elit"
    ],
    "data": {
      "preview": "Anim eu ad eu aliqua qui sit exercitation.",
      "fileSize": 15725,
      "textUrl": "https://aws.link/"
    },
    "isFinished": true,
    "isCached": true,
    "isFavorited": false
  },
  8 : { 
    "type": "Article",
    "title": "enim ut aute aute irure",
    "tags": [
      "aute",
      "fugiat"
    ],
    "data": {
      "preview": "Lorem ea eiusmod eu labore sint do occaecat elit magna sunt veniam aute.",
      "fileSize": 27209,
      "textUrl": "https://aws.link/"
    },
    "isFinished": false,
    "isCached": true,
    "isFavorited": false
  },
  9 : {
    "type": "Article",
    "title": "id esse amet mollit consequat",
    "tags": [
      "nulla"
    ],
    "data": {
      "preview": "Consequat sint sunt labore id do irure qui excepteur laborum proident incididunt incididunt cupidatat velit.",
      "fileSize": 20976,
      "textUrl": "https://aws.link/"
    },
    "isFinished": false,
    "isCached": true,
    "isFavorited": false
  },
  10 : {
    "type": "Article",
    "title": "sit est cupidatat veniam do",
    "tags": [
      "et",
      "consectetur"
    ],
    "data": {
      "preview": "Tempor irure sint ea do voluptate magna laborum ad cillum.",
      "fileSize": 28363,
      "textUrl": "https://aws.link/"
    },
    "isFinished": true,
    "isCached": false,
    "isFavorited": false
  }
};

export const INITIAL_USER: UserSlice = {
  0: {
    userId: '',
    favorited: [],
    downloaded: []
  }
  // ...
};

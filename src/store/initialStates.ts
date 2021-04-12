/**
 * Defines a few placeholder states with fake data for each of the reducer slices (resources, lessons, etc.).
 * This is for testing purposes only!! Ideally, we'd want to populate the Redux store with real data
 * from Firebase when the app first loads.
 */

import { LessonsSlice } from './lessonsSlice';
import { ResourcesSlice } from './resourcesSlice';
import { UserSlice } from './userSlice';
import { TopicsSlice } from './topicsSlice';
import { HelpSlice } from './helpSlice';
import FetalImage from '../components/Images/fetaldopplerTopic.jpg';
import LightsImage from '../components/Images/lightsTopic.jpg';
import HeadlampImage from '../components/Images/headlampTopic.jpg';
import PhoneImage from '../components/Images/phoneTopic.jpg';

export const INITIAL_HELP: HelpSlice = {
  Root: {
    parent: null,
    title: "What's wrong?",
    description: '',
    options: {
      'An appliance is not functioning.': '404_ERROR',
      'Appliance socket is not working.': '404_ERROR',
      'Lights turn out in the middle of the night.': '404_ERROR',
      'Lights turn off earlier than they used to.': '404_ERROR',
      '1 or more lights do not work.': '404_ERROR',
      'No appliances or lights work.': '404_ERROR'
    }
  },
  Errors: {
    parent: 'Initial',
    title: 'Do you see an error code?',
    description: '',
    options: {
      yes: '404_ERROR'
    }
  },
  '404_ERROR': {
    parent: null,
    title: 'Ah shi, stuff broken!',
    description: 'Have you tried turning on and back off again',
    options: {
      yes: '404_ERROR_YES', //SOMETHING,
      no: '404_ERROR_NO' //SOMETHING
    }
  },
  '404_ERROR_YES': {
    parent: '404_ERROR',
    title: 'You monkey, why did you turn it back off?',
    description: 'Try turning it back on, maybe then things will worky worky',
    options: {}
  },
  '404_ERROR_NO': {
    parent: '404_ERROR',
    title: 'Well maybe you should try fixing things first huh...',
    description: 'Have you fixed it?',
    options: {
      yes: '404_ERROR_YES', //SOMETHING,
      no: '404_ERROR_NO' //SOMETHING
    }
  }
};

export const INITIAL_RESOURCES: ResourcesSlice = {
  '1': {
    type: 'Video',
    title: 'irure nisi enim Lorem non',
    tags: ['mollit'],
    data: {
      preview:
        'Ad do officia tempor occaecat laboris non magna ea sint deserunt mollit.',
      fileSize: 27790,
      duration: 1536,
      watchUrl: 'https://www.youtube.com/watch?v=oMCKWkvGLLA',
      downloadUrl:
        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/028e79a0-3532-427b-be11-292e8f363ea1/1_v3SolarSuitcase_InstallationPlanning_%284%29.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201205T210159Z&X-Amz-Expires=86400&X-Amz-Signature=82bd1835a6bc8ba47ceb050aaf8e3a31336b2d4a837d72e47aaf17741c4a4c4a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%221_v3SolarSuitcase_InstallationPlanning_%284%29.mp4%22'
    },
    isFinished: true,
    isCached: false,
    isFavorited: true,
    isCompleted: false
  },
  '23': {
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
    isFavorited: true,
    isCompleted: true
  },
  '25': {
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
    isFavorited: true,
    isCompleted: false
  },
  '27': {
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
    isFinished: false,
    isCached: false,
    isFavorited: true,
    isCompleted: false
  },
  '31': {
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
    isFavorited: true,
    isCompleted: false
  },
  '35': {
    type: 'Video',
    title: 'Doppler Video Fix',
    tags: ['Fetal Doppler', 'Troubleshooting'],
    data: {
      preview: 'this is an video preview ....',
      textUrl: '<cloud firestore or s3 link here>',
      fileSize: 13050 // QUESTION: file size on text resources?
    },
    isFinished: false, // QUESTION: once viewed, or manually mark finished?
    isCached: false, // QUESTION: allow caching text resources?
    isFavorited: true,
    isCompleted: true
  },
  '42': {
    type: 'Article',
    title: 'Doppler Article',
    tags: ['Fetal Doppler'],
    data: {
      preview: 'Sunt quis ea sint ea aute do consequat deserunt culpa commodo.',
      fileSize: 22435,
      duration: 1220,
      watchUrl: 'https://youtube.com/api',
      downloadUrl: 'https://aws.link/'
    },
    isFinished: true,
    isCached: false,
    isFavorited: true,
    isCompleted: false
  },
  '4': {
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
    isFavorited: false,
    isCompleted: false
  },
  '5': {
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
    isFavorited: false,
    isCompleted: false
  },
  '6': {
    type: 'Article',
    title: 'exercitation incididunt qui velit nostrud',
    tags: ['officia', 'minim'],
    data: {
      preview: 'Fugiat in velit nulla commodo mollit dolor.',
      fileSize: 21204,
      textUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: true,
    isFavorited: false,
    isCompleted: true
  },
  '7': {
    type: 'Article',
    title: 'laborum ex eiusmod eu id',
    tags: ['anim', 'commodo', 'Lorem', 'elit'],
    data: {
      preview: 'Anim eu ad eu aliqua qui sit exercitation.',
      fileSize: 15725,
      textUrl: 'https://aws.link/'
    },
    isFinished: true,
    isCached: true,
    isFavorited: false,
    isCompleted: false
  },
  '8': {
    type: 'Article',
    title: 'enim ut aute aute irure',
    tags: ['aute', 'fugiat'],
    data: {
      preview:
        'Lorem ea eiusmod eu labore sint do occaecat elit magna sunt veniam aute.',
      fileSize: 27209,
      textUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: true,
    isFavorited: false,
    isCompleted: true
  },
  '9': {
    type: 'Article',
    title: 'id esse amet mollit consequat',
    tags: ['nulla'],
    data: {
      preview:
        'Consequat sint sunt labore id do irure qui excepteur laborum proident incididunt incididunt cupidatat velit.',
      fileSize: 20976,
      textUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: true,
    isFavorited: false,
    isCompleted: false
  },
  '10': {
    type: 'Article',
    title: 'sit est cupidatat veniam do',
    tags: ['et', 'consectetur'],
    data: {
      preview: 'Tempor irure sint ea do voluptate magna laborum ad cillum.',
      fileSize: 28363,
      textUrl: 'https://aws.link/'
    },
    isFinished: true,
    isCached: false,
    isFavorited: false,
    isCompleted: true
  }
};

export const INITIAL_LESSONS: LessonsSlice = {
  '1': {
    title: 'irure proident et magna enim',
    description:
      'Mollit cupidatat et eiusmod adipisicing ullamco voluptate duis laborum excepteur cillum eu aute.',
    objectives: ['dolore qui culpa', 'dolor ad aliquip'],
    resourceIDs: ['8', '4'],
    isFinished: false
  },
  '2': {
    title: 'minim aliquip ut non cillum',
    description:
      'Voluptate officia do nostrud sint ipsum esse reprehenderit sunt consectetur eiusmod.',
    objectives: [
      'irure proident non',
      'veniam reprehenderit nostrud',
      'aute ipsum est',
      'Lorem voluptate in',
      'sunt laboris exercitation'
    ],
    resourceIDs: ['4'],
    isFinished: true
  },
  '3': {
    title: 'nulla veniam aute qui laborum',
    description: 'Sunt in ut in veniam.',
    objectives: ['aliqua aute do'],
    resourceIDs: ['5', '9', '10'],
    isFinished: false
  },
  '4': {
    title: 'mollit laborum elit id irure',
    description:
      'Proident proident dolore aliquip quis do ad qui tempor tempor enim aute quis laboris officia.',
    objectives: [
      'quis do incididunt',
      'est cupidatat aliquip',
      'proident do non',
      'id nostrud qui',
      'irure ex ipsum'
    ],
    resourceIDs: ['1', '2', '3', '7', '6'],
    isFinished: true
  },
  '5': {
    title: 'fugiat in ullamco velit incididunt',
    description: 'Irure ullamco veniam labore nisi veniam.',
    objectives: ['ea minim voluptate', 'magna commodo enim'],
    resourceIDs: ['6', '9', '8', '1', '4'],
    isFinished: false
  },
  '6': {
    title: 'et in tempor dolore aliqua',
    description:
      'Laborum qui cupidatat commodo dolore sunt non Lorem cupidatat velit magna aliqua aliqua ut.',
    objectives: ['incididunt magna incididunt', 'qui sit sint'],
    resourceIDs: ['5'],
    isFinished: false
  }
};

export const INITIAL_USER: UserSlice = {
  '0': {
    userId: '',
    favorited: [],
    downloaded: []
  }
  // ...
};

export const INITIAL_TOPICS: TopicsSlice = {
  '4': {
    name: 'Fetal Doppler',
    description: 'This is the Fetal Doppler.',
    imageUrl: FetalImage,
    suitcaseCoordinates: [0.5, 0.5]
  },
  '13': {
    name: 'Cables',
    description: 'This is the Cables topic.',
    imageUrl:
      'https://uc4f636e4e164e5a19ed9d0c3f4a.previews.dropboxusercontent.com/p/thumb/AA_WqOqKpm1EUCKFFxR8EAgc4YPeK-y1O5qZ5h1UX9x1_G20d81bCYuzpDCoBRgqIK2-zabqhsHEk3xlJc4dhAbiJtHLX1OM9roc4ggOUtu2-4c3l0Zut7UjV52X5OZKJpHAO2iuv7kiGuMRR5fda280XaLSutHhLK4A4suwoMD5vhD1dK8xcXVWWLJ9m_dxlc4FIl0NE5tIbugQzDRRUVze4GBi6_X6OIC5oMPWYFLcjp0bKps4qr2kQ8uqKzuI6tNimQ0hOLg-LtnZ_a7o9wrux4VHEFwlpyCap9qDS80oqpLXoef0U0dPDEIMZbvLyvwKl2FRkdA_0kcc4GG3houQnoxBOsAcRFcVa86h7ViOCQbNRWndbgDAsHqPuZJHTt56CH-NBJfcAZgaW6r6BGGgTi1r4cJEjNGfjY35etNOEw/p.png?size=2048x1536&size_mode=3',
    suitcaseCoordinates: [0.8, 0.3]
  }
};

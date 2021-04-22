/**
 * Defines a few placeholder states with fake data for each of the reducer slices (resources, lessons, etc.).
 * This is for testing purposes only!! Ideally, we'd want to populate the Redux store with real data
 * from Firebase when the app first loads.
 */

import { LessonsSlice } from './lessonsSlice';
import { ResourcesSlice } from './resourcesSlice';
import { SectionsSlice } from './sectionsSlice';
import { UserSlice } from './userSlice';
import { TopicsSlice } from './topicsSlice';
import { TroubleshootingSlice } from './troubleshootingSlice';
import FetalImage from '../components/Images/fetaldopplerTopic.jpg';
import LightsImage from '../components/Images/lightsTopic.jpg';
import HeadlampImage from '../components/Images/headlampTopic.jpg';
import PhoneImage from '../components/Images/phoneTopic.jpg';

export const INITIAL_TROUBLESHOOTING: TroubleshootingSlice = {};

export const INITIAL_RESOURCES: ResourcesSlice = {
  '23': {
    type: 'Article',
    title: 'TROUBLED FETAL',
    tags: ['Fetal Doppler', 'Troubleshooting'],
    data: {
      preview: 'this is an article preview ....',
      sections: ['section 1', 'section 2']
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
      sections: ['section 1', 'section 2']
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
      imageUrl: 'link to thumbnail for video',
      downloadUrl: '<s3 link here>',
      fileSize: 13050, // File size in bytes
      duration: 67 // Video duration in seconds
    },
    isFinished: false,
    isCached: false,
    isFavorited: true,
    isCompleted: false
  }
};

export const INITIAL_SECTIONS: SectionsSlice = {
  '1': {
    title: 'Section title',
    label: 'Label',
    imageUrl: 'Image to show for this section',
    text: 'Main content'
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
    suitcaseCoordinates: [0.5, 0.5],
    color: 'Gray'
  }
};

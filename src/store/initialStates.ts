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
  '23': {
    type: 'Article',
    title: 'TROUBLED FETAL',
    tags: ['Fetal Doppler', 'Troubleshooting'],
    data: {
      preview: 'this is an article preview ....',
      sections: ['section 1', 'section 2'],

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
      sections: ['section 1', 'section 2'],
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
    imageUrl: FetalImage
  },
  '13': {
    name: 'Cables',
    description: 'This is the Cables topic.',
    imageUrl:
      'https://uc4f636e4e164e5a19ed9d0c3f4a.previews.dropboxusercontent.com/p/thumb/AA_WqOqKpm1EUCKFFxR8EAgc4YPeK-y1O5qZ5h1UX9x1_G20d81bCYuzpDCoBRgqIK2-zabqhsHEk3xlJc4dhAbiJtHLX1OM9roc4ggOUtu2-4c3l0Zut7UjV52X5OZKJpHAO2iuv7kiGuMRR5fda280XaLSutHhLK4A4suwoMD5vhD1dK8xcXVWWLJ9m_dxlc4FIl0NE5tIbugQzDRRUVze4GBi6_X6OIC5oMPWYFLcjp0bKps4qr2kQ8uqKzuI6tNimQ0hOLg-LtnZ_a7o9wrux4VHEFwlpyCap9qDS80oqpLXoef0U0dPDEIMZbvLyvwKl2FRkdA_0kcc4GG3houQnoxBOsAcRFcVa86h7ViOCQbNRWndbgDAsHqPuZJHTt56CH-NBJfcAZgaW6r6BGGgTi1r4cJEjNGfjY35etNOEw/p.png?size=2048x1536&size_mode=3'
  },
  '14': {
    name: 'LCD Screen',
    description: 'This is the LCD Screen topic.',
    imageUrl:
      'https://uc9392e33c22be6a823389485400.previews.dropboxusercontent.com/p/thumb/AA_75MDsx8ViDVsIJkq_P8SO_v5kKp6gwxtclOPD88U-Ct2VM3icjzAmsmCCxvKpPTePVNObb1lShHs-8MvE-ug462BRuiOMUv1LmEWahottcNzIVATmK73j2iAMt70mGYzgBufaDmtuc573f1xqh1nXd74rx3OjnpQ19tUUYiL4nX5DDdoEiYtineAm1uglQTTm320dZbq0UKax-rKEcd7k9pJDSVXVNbwtZ_yF4Qj1HVnKdzi_JsOoMMy0hP4mqadfe6CRndpL-MN2ZYvdRK59FmmlTPzF_VckQxO2kG88mykfdgmw7pVzSw6Hdhs3JhiGlt-Upk80fWRr2Ib_VzYYJAXVdUM0ydKIrZB0wyM4IWVw3Nn0f53aaZO2grm9d14MNH-yOwdlCbultQe0HCklD9vWL9aqRPYWozCWALaj8lAkYXiXZQ-PvaDzXL9XrXGUX3mX0tkOaDFS8nN84DTrruy-Slq0FfUnwYaEdmyx_g/p.jpeg?size=2048x1536&size_mode=3'
  },
  '15': {
    name: 'Main Battery',
    description: 'This is the Main Battery topic.',
    imageUrl:
      'https://ucba4df7854032ce3c44b14edcd1.previews.dropboxusercontent.com/p/thumb/AA_Nc-9ZSI4ro-hETv-zQOyNCWTH5BLY4TuamJz4_MsegDxZmCly-PVuUm5mhu4XP6OkFegSAxiFOVO_YFb4304Oegngb6IZ7qjMfDJk2Ae2sHIrt-5Gy909A1WdUpHhsL_s6j8ByK_PRwtwufEeqlnDNNDghUbl-eyNfeesa15Qvrrv4vmHN87Km4XLvvLRVc-QWLB46InHHd85tre7Atos0Um7aoBtkZkMdOdjNvKjgdmQK4eR6U3jaViJLaOIXdOmKCma6u-Jv0FyWS_mmPwUA8_pmPcg1NACb45OOb2wN3QooVGLD5suq6mrG3ZmqRNdIfaHHvbfUvR5GuakynBDNcTK0Xyf4YLfSWK2RDst7g/p.jpeg?fv_content=true&size_mode=5'
  },
  '16': {
    name: 'Side Panel',
    description: 'This is the Side Panel topic.',
    imageUrl:
      'https://uc0c740200565870274c27d46209.previews.dropboxusercontent.com/p/thumb/AA_toy33QFKPzXMtbIm7i0Qzz5e2TCYa5li3CgZjPP3axud979VEWbi5a2-x3yl3WkAhjBl2oARIX00E1FtcPdpwaVBkdTJDz1Px7PvnbG7vxWi_KEvuBqy1EqIGl7JJIU3yPJboLXpMQBRBEnJB2ta96qgdXloh1mKAxPwK_RJPQ3FH1iV1DE6VgwfIqjGZcSl5OQmjswp1w9XPr6Qb48E3rBAwhO61jzHp0zjfFYyT7I9G8VDwd53qOoYke7G3BnwQSXfFXq2cQImaWyUgotwZLH6TEMDkdrOgNgbDDTodDPQvJUUilIaszoZwH_y7bd1T0oqq-gzHNZLaUiNyMEUjEU7J3c1eu3nCD8D3R6rfzctZPeWGr66qDpbvTfRv2gmCdgpLLcBvsxnOhOElC7puq-671vSkbA-sEicTPvJOcQ/p.jpeg?fv_content=true&size_mode=5'
  },
  '6': {
    name: 'Rechargeable Headlamps',
    description: 'These are rechargeable headlamps.',
    imageUrl: HeadlampImage
  },
  '8': {
    name: 'Phone Charger',
    description: 'This is the phone charger.',
    imageUrl: PhoneImage
  },
  '99': {
    name: 'Lights',
    description: 'These are LIGHTS.',
    imageUrl: LightsImage
  }
};

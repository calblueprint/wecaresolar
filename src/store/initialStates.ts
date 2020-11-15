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
  },
  35: {
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
    isFavorited: true
  },
  42: {
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
  6: {
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
    isFavorited: false
  },
  7: {
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
    isFavorited: false
  },
  8: {
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
    isFavorited: false
  },
  9: {
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
    isFavorited: false
  },
  10: {
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
    isFavorited: false
  }
};

export const INITIAL_LESSONS: LessonsSlice = {
  1: {
    title: 'irure proident et magna enim',
    description:
      'Mollit cupidatat et eiusmod adipisicing ullamco voluptate duis laborum excepteur cillum eu aute.',
    objectives: ['dolore qui culpa', 'dolor ad aliquip'],
    resourceIds: [8, 4],
    isFinished: false
  },
  2: {
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
    resourceIds: [4],
    isFinished: true
  },
  3: {
    title: 'nulla veniam aute qui laborum',
    description: 'Sunt in ut in veniam.',
    objectives: ['aliqua aute do'],
    resourceIds: [5, 9, 10],
    isFinished: false
  },
  4: {
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
    resourceIds: [1, 2, 3, 7, 6],
    isFinished: true
  },
  5: {
    title: 'fugiat in ullamco velit incididunt',
    description: 'Irure ullamco veniam labore nisi veniam.',
    objectives: ['ea minim voluptate', 'magna commodo enim'],
    resourceIds: [6, 9, 8, 1, 4],
    isFinished: false
  },
  6: {
    title: 'et in tempor dolore aliqua',
    description:
      'Laborum qui cupidatat commodo dolore sunt non Lorem cupidatat velit magna aliqua aliqua ut.',
    objectives: ['incididunt magna incididunt', 'qui sit sint'],
    resourceIds: [5],
    isFinished: false
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

export const INITIAL_TOPICS: TopicsSlice = {
  12: {
    name: 'Fetal Doppler',
    description: 'This is the Fetal Doppler topic.',
    imageUrl:
      'https://uc072c35644e70e1554680a0953d.previews.dropboxusercontent.com/p/thumb/AA_fQfc49hXb4CsVa8rq2HhdN1dMkkmePxC3CvObYFkwI3AP3SwtKnU127_o_dQfqU9SgUA3L_ktcsSRPAak8Qm76Y_vJu9anHZsMjsgsXGBVlBEGtz2U4V242ZYO8HfDmMyH3mkL1rkB8PI8guTnJjDrW2XLXhQztMH-ESiy8xMQ778-GK5CON7E2K9gnYbRAub6JbpnOlk3kUdnI7jZ_DiRJBs7d2Vvd72gIdbUaCopBVQfsnrtMjYyLp6p3JpSf4EEyeR-YiUtWIiUqAgiRB7URXeO47QfI8Cd9wQfvZ7PsF8Ay7NYxCfBBSdkglVMk2GR-Chpw5CEFw0Er0rswy1n4poy4-E1mUsHv4pUOWtQ0HqICAjpvOH8Lv8-Nkk6TeEo4GtmVi_lbNt_TvYjN2oq_DFzmUllZZJ2-oxKjVcuw/p.png?size=1024x768&size_mode=3'
  },
  13: {
    name: 'Cables',
    description: 'This is the Cables topic.',
    imageUrl:
      'https://uc4720d434b454dd81417a8d4b64.previews.dropboxusercontent.com/p/thumb/AA9EzRGFY81sTVpOPPK8-pic79aWPpcjiaZfYWTMM0OSGVlYQzpOt5Mf8c19F6BVXudfG2solJDUH8mZTsB2Nb8mZw_uRqePk8jWnSQAiUlWaG7BsXzfw6zPj1Nm4CjCLSqYZZYpFiEzDB75lEBzlJr33kKk05EkizQH9W1SYjmfgGw5dDMZcfFcupkWvZUe7Y7o8LGB2CvTGnxSIQ8sAMtWfeLx1sy4P7ZvBOFfMeA_nTJlZ-uH-KrUE38drnEPqFGnGwFWCqOBs8F5MhWkPczjy3wYg9R7RTQvORf-GJDeNw8xqDE1g6edeayTDWhDBnjiUyY-btXzOqkPls5K09Zv40vBP6C2pxgx3hRdWJ6ufNEMaXbNXN2IuxsvwtNjnAkzV5B2cycMY8x0EAbRfkXT4ZOb5Waut8TMoGnBlEES9g/p.png?size=1024x768&size_mode=3'
  },
  14: {
    name: 'LCD Screen',
    description: 'This is the LCD Screen topic.',
    imageUrl:
      'https://uca6202cbb16323d6a1e9a445215.previews.dropboxusercontent.com/p/thumb/AA8jlI0lKk2RKptqhI24mih_tk5LmLkCXVNSh7v23mdsQYIw30CWdH3VL3O4oGWnWPBd8eVP2Yxcd38O5S-YEkDBlUAsiAzLDbQXdNX0fbIoZ3LAwCk5e77IYtcL5oawfUNE5Qi3DgENmraecXL6UUvxJvlCRwVgwu_M_3z88LE1kwxxKlC_0jhL326CTeh3xxvO8Gj86lM4fsvFw0-Dhnro0EwLZKDRxp_9qKHWyYvzrVPAzjHgial8QpMkYx9rkme37C0XvxRvD21fvslMO4hhJFtSAGTdPGerbjEwVhvb_CmT75PF7o3aLfYtkspG_r-PCjlOvFSd3-Aj7u0fyysa9vtMXDhgMR0Jh5yiN6IBlXoaoNyIIfebbNK294sV9FetV_WiLiu6h1LcA1XnqTrli61CCkyKDnhYpytubtLRuzZsG70-95R85Pm7KL8xZUJF4K_d7sl8TtnDYwyk0BWZcP0drsWKwB56GG2HqBd7PQ/p.jpeg?fv_content=true&size_mode=5'
  },
  15: {
    name: 'Main Battery',
    description: 'This is the Main Battery topic.',
    imageUrl:
      'https://ucbd01ef43e4ff2c24049be28d3e.previews.dropboxusercontent.com/p/thumb/AA9oeWnR4yR0BXTdyWjeMlGdMNkMHjJv30dk7DXAXld6xOP1f5C7yVz1mlR6xjeqDnct2hj4BB2r0cP5v0vFykF0A5olwh2I_Hox9OnBjCUM_ybMQUs3MN92dRy0UF6dNS2IGH3XXnOypFO1fs_xrn0ZZYvP-VZQjP1HbioaGiYbWQAYterf94DYtRnUGBlnS0rCt-v33ZCwsIhaww8ckdOwvpA1idUBz2r6Em-RBnl-O6c6n43hv0ydWA6sbITZSWLLmlgSxScwg--ygGXTp5lgsr6hPp-je50l_9RwFW2FxAMFxwOj7WvLxb_2R6uYPGsM7QrIdiGe6Gnx_LCrS9vw0JK08qS56VpVIKfN3CR2mQ/p.jpeg?fv_content=true&size_mode=5'
  },
  16: {
    name: 'Side Panel',
    description: 'This is the Side Panel topic.',
    imageUrl:
      'https://uc4ffa47f9f2e2a246c75b05c251.previews.dropboxusercontent.com/p/thumb/AA-eeJAh4zP4EOGVwgnsg-w6FbH1E9ccaGYnWFKNl1gbY8O4KRsZs9pJ-RQMd3ngaPN5IrIR-PSeLOxhe9UuKBW2A-JEC5FkrdotSEEAhpQZfvWosFFeKDiOPjfBCW-igfo3J9VKJ_Vs1oDTf1XHNgd-aptcvLA3DVlxaiWraTn_u7ZLDSQ__6xj_a6V_0IiS6Wn3z8F7JjbZ1fAybxPb24CyS5rlXC0MGKT0GT-jUBSbUOFTRmYGmwzuwcTfJWo-PbCmblr5RaB_TsycvkCHhBD4ts-a8zIf6QhHy5vvciDRg3zBY7rVMZFRlzzRDHRWfGamJj0XTDYl0DtiHjvoNP7Pzx_-QllbqXN6GVzw9hDZmYBMem1A0RTH2uJAx2iG9NkzzCo4EuRV3zKpNWfcUTXU67vurs9BEiCm-tTzxPE5Q/p.jpeg?fv_content=true&size_mode=5'
  }
};

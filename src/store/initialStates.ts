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
    isFavorited: true,
    isCompleted: false
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
    isFavorited: true,
    isCompleted: true
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
    isFavorited: true,
    isCompleted: false
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
    isFinished: false,
    isCached: false,
    isFavorited: true,
    isCompleted: false
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
    isFavorited: true,
    isCompleted: false
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
    isFavorited: true,
    isCompleted: true
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
    isFavorited: true,
    isCompleted: false
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
    isFavorited: false,
    isCompleted: false
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
    isFavorited: false,
    isCompleted: false
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
    isFavorited: false,
    isCompleted: true
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
    isFavorited: false,
    isCompleted: false
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
    isFavorited: false,
    isCompleted: true
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
    isFavorited: false,
    isCompleted: false
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
    isFavorited: false,
    isCompleted: true
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
      'https://uc601b8fd81c77e1fca1e1f3cc0b.previews.dropboxusercontent.com/p/thumb/ABAl4evBqaqF611Ge42xVBJTMHMH8KKIPU1cdm9ZymQIKOLiciQKtPTvFpy8UsHj8ILfYCvFjUsjFebNnEbcZDYaQ2LT7oNGm9O_Fpe2b02SGPX0tHKlW2tw4iYC_W5lyqBnKpVBCM0lu7sFkgN1yS4737COX1pSL74-biwJDPuEa15-_L13SneS35qwLDn38HyeDHOHBYUwgVtFXgFc1GrwDYU8rw1eIaTJKjRVI7ffg7GNwzOO86EBjF_MPz8Y7lT-IUcIothPH4fEkEwcUQym6S8oJeBee65HPquyxTlNuDdQ2AYsW-aXjQOT1ttEWElFHVk5bhemwIbept7_MyubCL5EM9iL4VnElUvOYfrJIw/p.jpeg?fv_content=true&size_mode=5'
  },
  13: {
    name: 'Heap Lamp',
    description: 'This is the Exapansions Box topic.',
    imageUrl:
      'https://uc024a218f678fe0774b91c65463.previews.dropboxusercontent.com/p/thumb/ABA3GPZp1RKXaEiqwiDwqP5yxXvDpdmIkNeaiz6td_Yvr9WL9v_WbCQwD9vjxcjSH8M8YPvcHjwMJ_3fyB25ozj1OJaj3dLzxFuenxARu03XC1TZDEIVaqQbXCrF0aRfOt4RIiun8mhgNFxu3qfRrkBLQj-GZ3xL6I_gw2ntY6WjjARXATwa0smFY0v4em_vPOM3C90lKgxdQlabgANtYLDMAqU3MbjmftSKAwHpIAVLe5HXDYeM0q1HPkLg0kpFShWJsObpIFYGveix2NgfMb93xHAPlAoGad-51-VQXa7XpLJaF26xmBeY8D6W7TVeIcBriDqM51NcHF95hnLK4Mtg3eF9szVda99gWgk2AViCSQ/p.png?fv_content=true&size_mode=5'
  },
  14: {
    name: 'LCD Screen',
    description: 'This is the LCD Screen topic.',
    imageUrl:
      'https://uc9e8f1145c9c34b54777a6f2b7d.previews.dropboxusercontent.com/p/thumb/ABCbqI5sxZI6A7xbcEi6rKoJWb2z69VmpcZDrOBa4xnDZYfg59f3PisH8tmId9n4dacWRvb_Uq7GcJTEyc7onrxfpxEqudJM6rYHiHVm7AqVE7T0yshIFLZhl9ku28ZFuIezTQkf5CHOhs40_s5LuR8SHgdwjheXwhBUPzNB6oBt5i9efFrNGPxBwwqb1gTuWUZTW8nwYq4GIwbIsj7xyKsUjw-JP3g58cGO6wyynBIjvJ9nusyM5YBBNhKTEWZ2MStFxDCk6r0B_rVlgfNyI8btTtkkciOvPEdrsW0U9kWyjJz1pz4tVRrrtv1PgUowslLJtgl0OLMKzvs06js9KTO-KEQqss4L5689srXWM9t36Att9HkMIpHWyM8qK02LqRTsz0kvSA-tDrjjy2iLIa_VNjVAAVl4ebzgTJALrKJjN9wmAi7eVSgqoBjKG5VRwkZ2mJN5F9DUE_RD3BfYe_JVXOknptdKeY2qfe56inUcOw/p.jpeg?fv_content=true&size_mode=5'
  },
  15: {
    name: 'Main Battery',
    description: 'This is the Main Battery topic.',
    imageUrl:
      'https://uc09f72efd814cc86af597c83a13.previews.dropboxusercontent.com/p/thumb/ABAj5uaHnbCTDCN1S9-ey-7epfzzA6T6SQvrqo1ALmvnAIoKXhBMrr3uvRd0XYBL4vaowSqSFN4TUtN5sKj352ckjaia2ZXw_oZo0KV5tVA32gyatjsOUZNrJF1EKaHVSOIVzK5CE1dlaichDmThouFySFP5ge6Cw4pEhSoZMYcr1E0lyJAfMcBYARwhd1o39MNvRV8lKgJ1CVpdoT8gzLAdNiIyz0s8uiP7cqg1q46eQCwMBreIwKB_o4NfMr7VNu4P05IKZTUlf9jI4XiV38yBJzderYoxommqdFvzSgN0D-JE7YWnLWd4L30IV07gvAw7I2bT-Syue1py4-JR1pnQON0NE_MwhE45vF_xOZA7Uw/p.jpeg?fv_content=true&size_mode=5'
  },
  16: {
    name: 'Side Panel',
    description: 'This is the Side Panel topic.',
    imageUrl:
      'https://ucff0d7099d1cf08d2e19171de9e.previews.dropboxusercontent.com/p/thumb/ABC199QomNVX8yT2uBHpy_fyv58U6ozmGDJWUMli_bNovmFFQ2g_OxmofZfFFyE0if6kfjwjuAIiAWmu9UN_JvQklcEdileSXxayqmcTJA3DoqtMgUwPyD-zbJZ1xLchOJX9VlaL92PepgwAsQMhtvmP6Tlfm6f8dT7v91K5Cv8MvD5fMqwWLZQc-CTua89RfMQxAcArMa-H64YOdP5h-z7ZGHvZrdi2YxZatJgvpApg3CtBdVCzRswtVW3UDyLd6xOq9Xx-YN-qEEFHhL43Q6xoX4PMVG-ltZnL7Z21lgIr_cGbWyMwQa7PWwQKEj12TaFpEFstPQI_nyBPyRA-WNverm4l20wpjalMb7DINdBLxB5V2XsBdK_dw4xm4q9n_Bepd9UJOxhTpvPnhzfaSzHJ-I7EvDeCAlpyzqxQOxcM0UDf0NYVdUqYsBD_BcGLmpUkRCpXs64e3V-HaXqZzmPgdTnzaJSPX6UrE0IfwTMmgA/p.jpeg?size=1280x960&size_mode=3'
  }
};

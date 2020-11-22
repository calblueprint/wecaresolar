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
      downloadUrl: 'https://aws.link/',
      image:
        'https://uc5696fc2a8cc7a9c499b96ea760.previews.dropboxusercontent.com/p/thumb/AA96Y7z2YO1C81IYjdkG0QcKiLkiTwzY2D7_o4SeZ_uJt8qECPbTIUh20DOV2Wo9dYj98j9ET298ljNEL4aGIL72gYgSlTeDZaNjp8AcJNb487XQ6FZZyXUga7htYvrcYoRBcItYvhtaaZi5t2OhFQuW98tAksvdn1YGP_CVPDEjlCWo641SH5H_NmiNFXTxnrwi-IupAI-6o6JjL0_xr_kfowlBTXTjrgrXt80TaPreWhyGcO_5rZAA4vcy9C2Rc3lnLnpg3DI1PFzLpZlevQW0w6jiv7tzPzaZrf17VZZdtWxOcYNIdZBIcDaxW5OzTlKfqm8JBL4Bv-ouJVgdG1XMlgxpGVjhaSl0d6RVtlg6Vg/p.jpeg?fv_content=true&size_mode=5'
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
      downloadUrl: 'https://aws.link/',
      image:
        'https://uc2dd59ada4f7266f6f7a9be5d1f.previews.dropboxusercontent.com/p/thumb/AA8Ar5IYy7I8f5iRyi3fxV200o5yKwx5kxCVKW2JaH_4TeyqI7XSqInzvRG-7vjoPlTTVWkAbqmNn6idc168WjNtReK9GB7vAGAV-p-e8uE1MtwKqrrV-JrmC0x1IGsIxRdUfdX0VxDCxJpXUvUMazRn8pZn6ivbf5aP_WclqQrLxmPF8CVMKr9z4k06isAYp8Plm-YSzfoXTd2ZbEKo_3tyU6M0R6zIHAvVuNTtQpXO7-2BqAK8NEQ9nI7XTTJ49KHP35EUHBGTuSjOXEC4Qp265hmfqN3bNr0NWES56M3LUwiwMRgShTftg2mdiwtcd--bIXsfUMNTLnQTWUO_UFNc32z1fY1eBKfuGnHayi7JnA/p.jpeg?fv_content=true&size_mode=5'
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
      downloadUrl: 'https://aws.link/',
      image:
        'https://uc98bfc76742647c2ca59d911649.previews.dropboxusercontent.com/p/thumb/AA99bhLzjlSxf7a-yUZobOyWb6Hmsq_LUjZd_dTu7KMXFRhT-3hfQlGnZJJ-ABDRudTGmHXy4oLSH8JMJdzD8gWxTujecHjX4lxXwwwKPE6HPKm6wTLipXkgRuw-6zVK_NnBct3MCDdqN4_wuf0JRwmdlYxdlwcDl8luW6RfxZ-v71CdBlUfaqjnA7ajj4jSTk_aUiKmGSvz-WBIH4lsQjVyEfk_gLYpOKXBz1hUJFBUvyJessbXNF3HqATVOXEJdD4mU242389D3QCFJ7ExmXJBEHZdJ5fv7Qi-vkTPYaBNyDsnejSiH5JYyfqDarD7HgM1-yag2FHLCZFC7vc_7ZYUPh26Z4xroSJysUcFKxl0Tw/p.jpeg?fv_content=true&size_mode=5'
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
      downloadUrl: 'https://aws.link/',
      image:
        'https://uc498d4f056273895065e0c001d5.previews.dropboxusercontent.com/p/thumb/AA_TNFnlRhwS7pp-UMeYDVJxP026A1OiR-ELaKP6RQyJcqEjCyUxjzW44TAyWduT2T-4Q1kYLYQNsaHIPy3SAVh0Xz8dzEZsWlftO_xk-oDn_g2Rz1NVffLYPHA7HhEX96zS0PuNZSLBHuCKGZyEDfqz1nu59RIf9s71YU_ZppY4zO4yW5jb9StUJZ0DWD-JKph_V1k5hoi0FmOtDdoFEUaGVYQrsk7wCOqEBdpa_oc8pHXSBncdp9DP6Zzx4KjAsh--Fbd5dzy3iENkzQxPpSU1CGn1EpXvz0Ktpfum2byG6QebkTwTCUdDX2QJR-x52GR59yoOYl-YE8TNfOiwPLqNQiW4OHaP_-rwGUfU922m2Q/p.jpeg?fv_content=true&size_mode=5'
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
      downloadUrl: 'https://aws.link/',
      image:
        'https://uc2d72d9add78bcb965e8c71e168.previews.dropboxusercontent.com/p/thumb/AA8PS7VZ7ZXZcdz0kHg6V-VNj65QMBpIwJ0S_VPlXVUuXli452MfvJaG4YHZgf07Xp_3LbS3AlJKBClQ1nT3pVL8UoJRXGFvDGkqPkjcTkdLJpdxpH_FG8SaRjG2GtScHk6bsQHOTxUjvUsL7kHk6F5uGn0dbROdd4g-cBwHQVkJkwwLnTI6gnDBQAqOQtjYW69Iql_7Ti6R55cc-Nq8HtrpTphDiias0fMpxeMsfR81e7fu6e3hRmNlVDla3b5hqIL7ferHTCRtQN8R2jmjt8zs3NCtysJBJdG8ykE5WvQN_7ejrEkVfop4OvmOK93yQo1pDxpEn00p25MJ3ZawWT7uLPv-W0B0vkxiZs5GSh2JSQ/p.jpeg?fv_content=true&size_mode=5'
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
      textUrl: 'https://aws.link/',
      image: ''
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
      textUrl: 'https://aws.link/',
      image: ''
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
      textUrl: 'https://aws.link/',
      image: ''
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
      textUrl: 'https://aws.link/',
      image: ''
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
      textUrl: 'https://aws.link/',
      image: ''
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

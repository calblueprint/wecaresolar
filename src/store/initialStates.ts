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
      'https://uc0c8613ecdb0581e1f781e3c9cc.previews.dropboxusercontent.com/p/thumb/AA9OBCwm-RxwrL5-vwvS_QHBbb8DoXp-GzYrzj4Wy0AwtaUf3Vs3enyG4NUedvcVlZiScOz8cSRwN7aF43iUbCMd9Osgh__mnfjJ54dE1SEIkFwmzwu7nLz7SoUHLN5uxaWjY09r3EnIsjDKFkQC2tN7U28_kF_Xfw75uvmg8vXRke62o8sArHfqhAXDr9ZznjXfmCaluDaHxKje7jetC3lIgpZwWK3VHQzVHAAx5WMo9DrhjxWMnoR4XVmsgn-tfIg3ODZ8t3PJXk3BCblFcX9aYXg9WcNX9nUWJ017Kwa6CJYVuDdPtS6pnoxlDZI1WPo8mkrdgLkTIAyRF98DT0aaRiJodbZpdZwjejf_G9uPkudCj3jqfoQURTclIXOTmoMfF3o7mbSoc_LqRGY_tFy6qOx4CCRHdEUzuP84_A-NOA/p.png?size=2048x1536&size_mode=3'
  },
  13: {
    name: 'Cables',
    description: 'This is the Cables topic.',
    imageUrl:
      'https://uc8b0f877a1f36d4fd53d6583e4d.previews.dropboxusercontent.com/p/thumb/AA9AVr-33mMvMFEbzU4q9qiDBDmtTOpFOJ3yysKgYQyqTXhoBHvR1SveeXpWalflOuIyDNYyofHGPnumnwhxELqPXAL2R7pzvu821hnGt-4rtzZEBFwwhrj0sGn_iP-4csHasPdbQYaSqfAvPHDHvFBX26aMBfgHpJWpIHiw8aXtd8lnub4dQBUCuTdZTp-J73oiyH4jY2r9i5xqtOE0XnKC-AP-RZT_nQ_c6C_tWrWzsm65W-VFlS8knEg3W-sG_KVCy_yvTQU9T9VM4iYgtbwdNybsH8jsXggB8LH97TIpBiFI3v3yQGoiw8c_I5CvVNERPJ5vF7X9BiQBgqsu9CrBb8KjQnzDJ7Lq6Xapeh0TFpvpFegfpi7smLWYfwng1CnTLuUgiw3qH55-prSOeWEyVfnyYYrCWWWrGoLzb0r2Aw/p.png?size=2048x1536&size_mode=3'
  },
  14: {
    name: 'LCD Screen',
    description: 'This is the LCD Screen topic.',
    imageUrl:
      'https://uca7b6598239510509670f5eb9e9.previews.dropboxusercontent.com/p/thumb/AA-i3B5fcNRmaWCG4orGhVwmDrerfrU0ozzPDOSyupTVm9T4jibxV_8zDoZ_U6BklaYk6KPxIG686fbwUBM4Pry49dgMWwDM8DMc9Da0PSgYkA6XS4kHhUAVSAzoWEmDJU5MoTpa2tXF11PjHkEooc0bsjpKCcKhn0Q4Vs67PQGP-JbLJeNgfFFDVSmb0OIDzvuVzeXNXc8UpzYGZH1uErct8nEXx8OI3MvHUi804ee7cmm2OWhZGzk6E70EEQEEIAc5HDzN4GAe99y6vnSu8GLsDnNPorn0T5GpL-UC8GKRx8jCKV9ospHxU-6B9HSmdIHwZy9hEQFiy253iRACRn-LgXe1LwVv8TJvfTtYQnGizhMSJGJ6CU6MzvtmLJdry-RJpttCYw1YqD3nd8Xt1BH-_N88mcWeDeZatKRR5rbMEeKrYoEX-TlGZS0telq50gbhM6MrBV8OXSTK3IRJSVq9WMI_fV1XPvn0J6xmzlJyhA/p.jpeg?size=2048x1536&size_mode=3'
  },
  15: {
    name: 'Main Battery',
    description: 'This is the Main Battery topic.',
    imageUrl:
      'https://uc29260d1c49240948f51ec4cf1d.previews.dropboxusercontent.com/p/thumb/AA9mm1Db745F0iSp1UYcHSe3vTRDQobtxP19_TZoFBcuHkq8zIBgE1zz_mVJDHJ9nwky2riSwGzpKu0p4GSw8WWvwjazDOj-_5kR9nR9QvoVYs2kWWd4t8QYPwUChw0FoHoxsBfR0JegaFpjxXnD8VHBVlRqv53y_0EnKXYZl3irpxU6VPVAyl7UF-SuCEC3W9Q00YBrMZ_GRZbglQtSofhiFTbvByIC2Iu8jfSqy7qES5LSepodT84CPVufsqKztgvyL5ckQLxdu6SiAzSG23YQ2jJaN3Lrc7OiEQuy-RAoPrBzK9UBnP54Ofz130O1DtzNAaKk5jAlRn5uE7aRlSJGzIwogtx27ooE5i1tOzfwCw/p.jpeg?size=2048x1536&size_mode=3'
  },
  16: {
    name: 'Side Panel',
    description: 'This is the Side Panel topic.',
    imageUrl:
      'https://uc640c9abf009d9b207cc8356290.previews.dropboxusercontent.com/p/thumb/AA-LEuIuNsEHSUu54EYWn8J7oFK7Z7jfJMgeVgKtHNeERpwkJCSx2o09vzbxn_uTipOXzjFAJi8WUk4GZnEYkef0LzFzRTcN2nvwbs53SUpHGBXo64xFomgeU4tS6chAKtjXCDKt0XhQ_yhRzJgEBB_5JXcDAetUi1REFPAhXmJavZvd-6o-ec_xsRyzn0E_Xku9vGCjnP61DDhE0GJ3bUxR0BiSVKTnyOJsl4XBpv3Mjn5s_JkfdW-UB4yHNkrQw25moZSpPVEkGmUECdGo04yCf1Jw7Y0S102TIM7UYYKeXt8OGMGfpowHfySX5HCgzz5-E7vY4MKpe1DdjEF44zaR_lSM2PYiuQ3e757bG0Te3suBu8KGbOulxRXYeCvTc1UN-bWS7QUvyPVJkS_BTcohFIAnUURxVoNoQd_jExAyJg/p.jpeg?fv_content=true&size_mode=5'
  }
};

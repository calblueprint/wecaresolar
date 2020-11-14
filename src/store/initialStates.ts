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
        'https://uc44ab6bc23b444cdf6c5c0d5d00.previews.dropboxusercontent.com/p/thumb/AA8ohMLDZl4DuG6uTK_tTLfnwYKoKKWxQZZTSXr7kaISTBaGytk9sGf4zgw0fCGGC8Z5AFMN1_xjmMTmuU2IU_erY-EewF5AqE2msw_KXsBHAzN3F3cPX3njfdgcR3xs9Y3k3NDxWsXgoCdEHvHqjBe7KmSUN_bzum09Tt3n4j-DaIpri-ZfECxlZFW9BaAo5qrRjjXUzpu8lPxUy3yAu4O54cbnywjVs9qJ1DFU58aLWZ4YtoxFaq3SLyry2P3omgZkeaeGfMEzLyFsNqy6sdVOLrmkceWDkPGqze-8o2YWU-vY1cM4zmAvxdEbnZMWYw7xe1ozdFwXPY05VmeACGC7bXOz8l9u-YmnV1SNqsFGug/p.jpeg?fv_content=true&size_mode=5'
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
        'https://uc9f8e6b7cc7893201cfe4965919.previews.dropboxusercontent.com/p/thumb/AA9iFuvnD8WACF0h0-lufWBJf9IyKay5o6LNIJ9J3GWoN6a6flTILQZ6p_H-Y8OnDPxU01JqpNc1-JOl0DmTHVsWMaHXcivedDdOwMBBTgCRu1wUhtjwrhpWP8S7VODxiOVtnDfqeshYiW6n3w-S32Vy711wu08NKOdRTDjU2go7EzXj7iJQufxjJjqwVk84SpwN9Dcw5tO_HU2cdehUNUxpDexwdpq63QNEsP9YsGqXl8jgr27FALWWDTaQyf2H0HGF68YZBV5L1aKe_CxzDaGBWO_UMCP3adSTKoSaI5q5iUM99Rfv40asa94cMFm5YZB2EJmTqmvcbfPzNSPrFA7yFaE5PBmFbhMe-PF5HPYLNQ/p.jpeg?fv_content=true&size_mode=5'
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
        'https://uccffc8b7dd3a147c59d4144753b.previews.dropboxusercontent.com/p/thumb/AA_WTOMi6mfFquN8k257dA5SEQcNDyh8rJQ15SAxQfzXW0Tl7Awn4WReFwoK0YczJ3yGKXFvxpfBX8FC_gKOKIDAKVLbTbjrTiGqYwoCQH6hal1NbDMd_fqw29ZRQizAhI0Pj1o_CIOHwdT6V6AajQf3DTzg58sVzGy308xhNIBt9S00g2vKysaYCsZYzmvOUHgushdA7_QDE1MiBdY0cw8NF0fMA8FG2CrQorP0Jlv8i5EHsgu3cPS9WNIEEne32Syc3m3lVL5oV5gOOOpDM7cWlS3H0gymCweZEhosGi-4g-5jEtYg4izn9k5ECCKJol_f_TzVNN7h7uiWkMxD1IOoqt94YpZjCrJpaF5dPAaIsQ/p.jpeg?fv_content=true&size_mode=5'
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
        'https://uc993bc2c3aafd1c47a10f8f5be4.previews.dropboxusercontent.com/p/thumb/AA_CWsFFNoW8JE2CyEvJUVyG5wPw7MCUANSJbQeBpQzb0WWUEcCx6l_khmDjOzYCqd0CTlueuf5BCJ9ljuIjPreD_YyT3aiTyQ4Y9BpEz_Of3as6sIsF0a-6hMwS69FFp9cCZG0roBQOtwLNr54sYBwX5czZrDy827ikeJqJoo4VQZK5rSRNjTEjF0aMuwc0TmXO5I5a4KDyDwOkFXIIO4Qvz6aQBnkg3D2i3UC5ZuO07kYk0Aw70HEl1yAaS2qnB5AS0NW-JwY5u8vl-QI3XRbXajOEbYOSLSMQ8a_zpO1AEecKiQQ3i5swjTC63vbpUIR-zcjxZdC4Q4w_NWyidS7b83IcNykpstAeIbn0DqqF_w/p.jpeg?fv_content=true&size_mode=5'
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
        'https://uca6db8ef5a292c6dc94d6745b02.previews.dropboxusercontent.com/p/thumb/AA-a7oM5R7l-DxYrxVh3kjCm-f90vNMlqtH4zfZuWrUq4gDpTmE9xtaoPxYe9YqD5d2CQERCtCbqBySeax4qPaI-HDbuOIuw2qz-7qr2NxfvMhcVvDnsvlVd4PEdL4Om_rE6TSmNzSCTWXCDCeq7TQV8qKjVkyYQXRsIZ2b2KD3sgZKJN_78I7-aFcHjc799-O33jTwWjULA5_8pJROD50zEmsVfBuWy_ztZ4hU8AFhvu6_4kIBkgDcKOgz_p_II1zzZC0qVVvMgekrSw8zHZkQ7e3sxJYTCdQE9N6svixcNozERmhVf8sUdRBldtkccwivYi0_aePHAVy78PacfJloXN0Y6RoMSmYDoF7V_Cn95yA/p.jpeg?fv_content=true&size_mode=5'
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

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
    title: 'id dolor irure tempor ullamco',
    tags: ['sunt', 'sit'],
    data: {
      preview:
        'Lorem elit in commodo in nisi in exercitation excepteur aliqua.',
      fileSize: '10000-79.79206884254646',
      duration: '100-7.2764011827915285',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: true,
    isFavorited: true
  },
  2: {
    type: 'Video',
    title: 'sit ipsum mollit consequat incididunt',
    tags: ['esse', 'ut', 'exercitation', 'et'],
    data: {
      preview: 'Nostrud aliqua nisi quis dolore adipisicing sunt nostrud non.',
      fileSize: '10000-21.63467459702805',
      duration: '1001.5600530799773478',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: true,
    isFavorited: true
  },
  3: {
    type: 'Video',
    title: 'mollit velit labore dolor veniam',
    tags: ['in', 'non', 'et'],
    data: {
      preview:
        'Qui nisi commodo tempor tempor do cillum dolor irure laboris elit occaecat.',
      fileSize: '10000-43.76564900192361',
      duration: '100-3.2627004815410614',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: true,
    isFavorited: false
  },
  4: {
    type: 'Video',
    title: 'enim culpa sit nulla sint',
    tags: ['culpa', 'magna', 'sit', 'consectetur'],
    data: {
      preview: 'Nisi id tempor aliqua amet.',
      fileSize: '1000076.63382587265498',
      duration: '100-0.8612267068420109',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: true,
    isCached: true,
    isFavorited: true
  },
  5: {
    type: 'Video',
    title: 'eiusmod dolore excepteur nulla sit',
    tags: ['dolore', 'irure'],
    data: {
      preview:
        'Commodo officia laboris magna ullamco Lorem nulla id consectetur commodo exercitation commodo nulla et nulla.',
      fileSize: '10000-23.14401974298842',
      duration: '1007.7051013884785355',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: false,
    isFavorited: false
  },
  6: {
    type: 'Video',
    title: 'eiusmod eu occaecat labore minim',
    tags: ['id', 'et'],
    data: {
      preview:
        'Sit nostrud in culpa id aliqua ut aute fugiat voluptate incididunt.',
      fileSize: '10000-42.596129684783456',
      duration: '100-5.989141600812408',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: true,
    isFavorited: false
  },
  7: {
    type: 'Article',
    title: 'veniam non voluptate ullamco magna',
    tags: ['anim', 'consectetur', 'veniam'],
    data: {
      preview:
        'Ea laborum proident proident proident magna ad nulla qui deserunt nisi eu amet minim.',
      fileSize: '10000-29.480568664587096',
      duration: '1000.6098432596830109',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: true,
    isFavorited: false
  },
  8: {
    type: 'Article',
    title: 'duis quis Lorem do officia',
    tags: ['qui', 'elit', 'amet'],
    data: {
      preview:
        'Officia aliquip proident cupidatat esse velit irure deserunt ex culpa.',
      fileSize: '10000111.35090839633033',
      duration: '100-4.060723036041372',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: false,
    isFavorited: true
  },
  9: {
    type: 'Video',
    title: 'eiusmod dolore et sunt aute',
    tags: ['culpa', 'quis'],
    data: {
      preview: 'Enim occaecat ullamco laboris enim.',
      fileSize: '1000056.32275489612267',
      duration: '1001.6655167460198879',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: false,
    isFavorited: true
  },
  10: {
    type: 'Article',
    title: 'consequat nulla nulla dolor id',
    tags: ['et'],
    data: {
      preview: 'Ex do irure tempor do.',
      fileSize: '10000-48.05979285120938',
      duration: '100-4.909551840745653',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: true,
    isFavorited: true
  },
  11: {
    type: 'Article',
    title: 'eu fugiat adipisicing occaecat do',
    tags: ['est', 'ut', 'incididunt'],
    data: {
      preview: 'Officia aute dolore sunt labore nostrud eu.',
      fileSize: '100005.862015059921144',
      duration: '1005.220159081624979',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: true,
    isCached: false,
    isFavorited: true
  },
  12: {
    type: 'Article',
    title: 'in incididunt laboris consequat esse',
    tags: ['eiusmod', 'cillum', 'Lorem', 'veniam'],
    data: {
      preview:
        'Ea reprehenderit cillum deserunt voluptate deserunt eu amet excepteur culpa nulla exercitation consectetur laborum elit.',
      fileSize: '1000025.636350061653086',
      duration: '1000.13491967816734288',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: true,
    isCached: false,
    isFavorited: true
  },
  13: {
    type: 'Article',
    title: 'non anim laborum ad commodo',
    tags: ['nisi', 'proident', 'quis'],
    data: {
      preview: 'Duis consectetur dolor cupidatat officia.',
      fileSize: '1000071.5848357013481',
      duration: '1004.530588461366184',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: false,
    isFavorited: false
  },
  14: {
    type: 'Video',
    title: 'adipisicing mollit enim fugiat adipisicing',
    tags: ['excepteur', 'velit', 'incididunt', 'ut'],
    data: {
      preview:
        'Pariatur nostrud ullamco reprehenderit dolore magna nisi in consectetur adipisicing.',
      fileSize: '100000.9608984497395727',
      duration: '1001.9942344751960923',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: false,
    isCached: false,
    isFavorited: true
  },
  15: {
    type: 'Article',
    title: 'excepteur in ex irure esse',
    tags: ['irure', 'nulla'],
    data: {
      preview:
        'Exercitation fugiat magna laboris tempor in magna laboris deserunt consequat ex nulla aute.',
      fileSize: '10000-55.12862563001733',
      duration: '100-0.012150129369371451',
      watchUrl: 'https://youtube.com/api',
      contentUrl: 'https://aws.link/'
    },
    isFinished: true,
    isCached: false,
    isFavorited: false
  }
};

export const INITIAL_LESSONS: LessonsSlice = {
  6: {
    title: 'Lesson 1',
    description: 'A short description of this lesson',
    objectives: ['A list of', 'Things that the user', 'Will learn'],
    resourceIds: [3, 8, 17, 23],
    isFinished: false
  },
  7: {
    title: 'Lesson 2',
    description: 'A short description of this lesson 2 ',
    objectives: ['A list of', 'Things that the user', 'Will learn'],
    resourceIds: [3],
    isFinished: false
  },
  8: {
    title: 'Lesson 3 with a very long title and much more',
    description: 'A short description of this lesson 2 ',
    objectives: ['A list of', 'Things that the user', 'Will learn'],
    resourceIds: [3, 8],
    isFinished: false
  },
  9: {
    title: 'Lesson 4 with a very long title and much more',
    description: 'A short description of this lesson 2 ',
    objectives: ['A list of', 'Things that the user', 'Will learn'],
    resourceIds: [1, 2, 4],
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

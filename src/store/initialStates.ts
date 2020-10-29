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
  17: {
    type: 'Video',
    title: 'How to Use the Fetal Doppler',
    tags: ['Fetal Doppler', 'Setup'],
    data: {
      preview: 'this is a video preview ....',
      watchUrl: 'https://youtube.com/watch?v=_______',
      downloadUrl: '<s3 link here>',
      fileSize: 13050, // File size in bytes
      duration: 67 // Video duration in seconds
    },
    isFinished: true, // QUESTION: once viewed, or manually mark finished?
    isCached: true,
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
      preview: 'this is an article preview ....',
      textUrl: '<cloud firestore or s3 link here>',
      fileSize: 13050 // QUESTION: file size on text resources?
    },
    isFinished: false, // QUESTION: once viewed, or manually mark finished?
    isCached: false, // QUESTION: allow caching text resources?
    isFavorited: true
  }
};

export const INITIAL_LESSONS: LessonsSlice = {
  6: {
    description: 'A short description of this lesson',
    objectives: ['A list of', 'Things that the user', 'Will learn'],
    resourceIds: [3, 6, 8, 12],
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

export const INITIAL_TOPICS: TopicsSlice = {
  12: {
    name: 'Fetal Doppler',
    description: 'This is the Fetal Doppler topic.',
    url:
      'https://uce72b88e033b1894a6bd4a6893b.previews.dropboxusercontent.com/p/thumb/AA-VALtZ50Wlxc8KjAP_HrFUjfRQGn3XDl23bB8fKh0L_vWoVs0of8hzmp_3jpjSnCjBSD6pJvCH2fiDJ1_OjG7nBJ-0so-dUFgm0HlYzF1tyEPftOMkuHfJUiCuVzuth-jWJenQB5TUWTfX1xaG7NXAbuM7aZl48yKSsJC3tssAxPqcN3onDGxwTgCGDCNppvIX5mGaX9A4XhfpIFLpJidwRke8tgW0xEML4Cf2nJjMIezUpOWBIA-PCd96m4v6jtbNHzm-8k5uFr3xw8vIrfvIVpzvSY7STDl17Sks7ZO9778UEp0elfzQUXQnBYRzYiQnHyVfr0FHd32YvomNjvm7D2WjOJwgmcddPpBZoW5sEFqT04mJHHnLG7kg9JbnfAlV3HLQ6Vmru6Je_iMN-VWoEp3xfjfZzyuPJlsJJyunzg/p.png?fv_content=true&size_mode=5',
    isFinished: false
  },
  13: {
    name: 'Cables',
    description: 'This is the Cables topic.',
    url:
      'https://uc4f636e4e164e5a19ed9d0c3f4a.previews.dropboxusercontent.com/p/thumb/AA_WqOqKpm1EUCKFFxR8EAgc4YPeK-y1O5qZ5h1UX9x1_G20d81bCYuzpDCoBRgqIK2-zabqhsHEk3xlJc4dhAbiJtHLX1OM9roc4ggOUtu2-4c3l0Zut7UjV52X5OZKJpHAO2iuv7kiGuMRR5fda280XaLSutHhLK4A4suwoMD5vhD1dK8xcXVWWLJ9m_dxlc4FIl0NE5tIbugQzDRRUVze4GBi6_X6OIC5oMPWYFLcjp0bKps4qr2kQ8uqKzuI6tNimQ0hOLg-LtnZ_a7o9wrux4VHEFwlpyCap9qDS80oqpLXoef0U0dPDEIMZbvLyvwKl2FRkdA_0kcc4GG3houQnoxBOsAcRFcVa86h7ViOCQbNRWndbgDAsHqPuZJHTt56CH-NBJfcAZgaW6r6BGGgTi1r4cJEjNGfjY35etNOEw/p.png?size=2048x1536&size_mode=3',
    isFinished: false
  },
  14: {
    name: 'LCD Screen',
    description: 'This is the LCD Screen topic.',
    url:
      'https://uc9392e33c22be6a823389485400.previews.dropboxusercontent.com/p/thumb/AA_75MDsx8ViDVsIJkq_P8SO_v5kKp6gwxtclOPD88U-Ct2VM3icjzAmsmCCxvKpPTePVNObb1lShHs-8MvE-ug462BRuiOMUv1LmEWahottcNzIVATmK73j2iAMt70mGYzgBufaDmtuc573f1xqh1nXd74rx3OjnpQ19tUUYiL4nX5DDdoEiYtineAm1uglQTTm320dZbq0UKax-rKEcd7k9pJDSVXVNbwtZ_yF4Qj1HVnKdzi_JsOoMMy0hP4mqadfe6CRndpL-MN2ZYvdRK59FmmlTPzF_VckQxO2kG88mykfdgmw7pVzSw6Hdhs3JhiGlt-Upk80fWRr2Ib_VzYYJAXVdUM0ydKIrZB0wyM4IWVw3Nn0f53aaZO2grm9d14MNH-yOwdlCbultQe0HCklD9vWL9aqRPYWozCWALaj8lAkYXiXZQ-PvaDzXL9XrXGUX3mX0tkOaDFS8nN84DTrruy-Slq0FfUnwYaEdmyx_g/p.jpeg?size=2048x1536&size_mode=3',
    isFinished: false
  },
  15: {
    name: 'Main Battery',
    description: 'This is the Main Battery topic.',
    url:
      'https://ucba4df7854032ce3c44b14edcd1.previews.dropboxusercontent.com/p/thumb/AA_Nc-9ZSI4ro-hETv-zQOyNCWTH5BLY4TuamJz4_MsegDxZmCly-PVuUm5mhu4XP6OkFegSAxiFOVO_YFb4304Oegngb6IZ7qjMfDJk2Ae2sHIrt-5Gy909A1WdUpHhsL_s6j8ByK_PRwtwufEeqlnDNNDghUbl-eyNfeesa15Qvrrv4vmHN87Km4XLvvLRVc-QWLB46InHHd85tre7Atos0Um7aoBtkZkMdOdjNvKjgdmQK4eR6U3jaViJLaOIXdOmKCma6u-Jv0FyWS_mmPwUA8_pmPcg1NACb45OOb2wN3QooVGLD5suq6mrG3ZmqRNdIfaHHvbfUvR5GuakynBDNcTK0Xyf4YLfSWK2RDst7g/p.jpeg?fv_content=true&size_mode=5',
    isFinished: false
  },
  16: {
    name: 'Side Panel',
    description: 'This is the Side Panel topic.',
    url:
      'https://uc0c740200565870274c27d46209.previews.dropboxusercontent.com/p/thumb/AA_toy33QFKPzXMtbIm7i0Qzz5e2TCYa5li3CgZjPP3axud979VEWbi5a2-x3yl3WkAhjBl2oARIX00E1FtcPdpwaVBkdTJDz1Px7PvnbG7vxWi_KEvuBqy1EqIGl7JJIU3yPJboLXpMQBRBEnJB2ta96qgdXloh1mKAxPwK_RJPQ3FH1iV1DE6VgwfIqjGZcSl5OQmjswp1w9XPr6Qb48E3rBAwhO61jzHp0zjfFYyT7I9G8VDwd53qOoYke7G3BnwQSXfFXq2cQImaWyUgotwZLH6TEMDkdrOgNgbDDTodDPQvJUUilIaszoZwH_y7bd1T0oqq-gzHNZLaUiNyMEUjEU7J3c1eu3nCD8D3R6rfzctZPeWGr66qDpbvTfRv2gmCdgpLLcBvsxnOhOElC7puq-671vSkbA-sEicTPvJOcQ/p.jpeg?fv_content=true&size_mode=5',
    isFinished: false
  }
};

import { createReducer } from '@reduxjs/toolkit';

const initialState = { 
  "lessons": {
    0: {
      "description": "",
      "objectives": [],
      "resourceIds": [],
    }
  },
  "resources": {
    0: {
      "type": "",
      "tags": [],
      "data": {
        "watchUrl": "",
        "downloadUrl": "",
        "fileSize": 0,   // File size in bytes
        "duration": 0,   // Video duration in seconds
      },
      "isFinished": true,
      "isCached": true,
      "isFavorited": true,
    }
  },
  "currentUser": {
    "userId": "",
    "favorited": [],
    "downloaded": [],
  }
};



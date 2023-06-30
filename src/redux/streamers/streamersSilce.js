import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const streamersSlice = createSlice({
  name: 'streamers',
  initialState: {
    upvotedStreamers: [],
    downvotedStreamers: [],
    currentStreamer: null,
  },
  reducers: {
    addUpvotedStreamers: (state, action) => {
      state.upvotedStreamers.push(action.payload);
    },
    addDownvotedStreamers: (state, action) => {
      state.downvotedStreamers.push(action.payload);
    },
    removeUpvotedStreamers: (state, action) => {
      const index = state.upvotedStreamers.findIndex(
        option => option === action.payload
      );
      state.upvotedStreamers.splice(index, 1);
    },
    removeDownvotedStreamers: (state, action) => {
      const index = state.downvotedStreamers.findIndex(
        option => option === action.payload
      );
      state.downvotedStreamers.splice(index, 1);
    },
  },
});

export const {
  addUpvotedStreamers,
  addDownvotedStreamers,
  removeUpvotedStreamers,
  removeDownvotedStreamers,
} = streamersSlice.actions;

const streamersPersistConfig = {
  key: 'streamers',
  storage,
  whitelist: ['upvotedStreamers', 'downvotedStreamers'],
};

export const persistedStreamersReducer = persistReducer(
  streamersPersistConfig,
  streamersSlice.reducer
);

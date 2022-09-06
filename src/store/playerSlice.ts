import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrackData } from '../models/types';

type AudioState = {
  tracks: TrackData[];
  trackIndex: number;
  isPlay: boolean;
};

const initialState: AudioState = {
  tracks: [],
  trackIndex: 0,
  isPlay: false,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addTracks: (state, action: PayloadAction<TrackData[]>) => {
      state.tracks = action.payload;
    },
    getTrackIndex: (state, action: PayloadAction<number>) => {
      state.trackIndex = action.payload;
    },
    setPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;
export const playerReducer = playerSlice.reducer;

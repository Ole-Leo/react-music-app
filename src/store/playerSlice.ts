import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrackData } from '../types/types';

type TrackState = TrackData | null;

const initialState = {
  tracks: [] as TrackState[],
  currentTrack: null as TrackState,
  play: false,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    getTracks: (state, action: PayloadAction<TrackData[]>) => {
      state.tracks = action.payload;
    },
    getCurrentTrack: (state, action: PayloadAction<TrackData>) => {
      state.currentTrack = action.payload;
    },
    setPlay: (state, action: PayloadAction<boolean>) => {
      state.play = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;
export const playerReducer = playerSlice.reducer;

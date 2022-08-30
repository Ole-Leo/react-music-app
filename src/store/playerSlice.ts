import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrackData } from '../types/types';

type AudioState = {
  tracks: TrackData[];
  trackIndex: number;
  isPlayerActive: boolean;
  isPlay: boolean;
};

const initialState: AudioState = {
  tracks: [],
  trackIndex: 0,
  isPlayerActive: false,
  isPlay: false,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addTracks: (state, action: PayloadAction<TrackData[]>) => {
      state.tracks = action.payload;
    },
    setTrackIndex: (state, action: PayloadAction<number>) => {
      state.trackIndex = action.payload;
    },
    setPlayerActive: state => {
      state.isPlayerActive = true;
      console.log(state.isPlayerActive);
    },
    setPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;
export const playerReducer = playerSlice.reducer;

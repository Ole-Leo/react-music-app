import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrackData } from '../types/types';

type AudioState = {
  tracks: TrackData[];
  trackIndex: number;
  isPlay: boolean;
  isMute: boolean;
  volume: number;
};

const initialState: AudioState = {
  tracks: [],
  trackIndex: 0,
  isPlay: false,
  isMute: false,
  volume: 50,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<TrackData[]>) => {
      state.tracks = action.payload;
    },
    setTrackIndex: (state, action: PayloadAction<number>) => {
      state.trackIndex = action.payload;
    },
    setPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },
    setMute: (state, action: PayloadAction<boolean>) => {
      state.isMute = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;
export const playerReducer = playerSlice.reducer;

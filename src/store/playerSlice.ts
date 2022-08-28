import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrackData } from '../types/types';

type AudioState = {
  tracks: TrackData[];
  currentTrack: TrackData | null;
  currentTrackIndex: number;
  isPlay: boolean;
  isMute: boolean;
  volume: number;
};

const initialState: AudioState = {
  tracks: [],
  currentTrack: null,
  currentTrackIndex: 0,
  isPlay: false,
  isMute: false,
  volume: 50,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    getTracks: (state, action: PayloadAction<TrackData[]>) => {
      state.tracks = action.payload;
      console.log(state.tracks, action.payload);
    },
    getCurrentTrack: (state, action: PayloadAction<TrackData>) => {
      state.currentTrack = action.payload;
      console.log(state.currentTrack, action.payload);
    },
    getCurrentTrackIndex: (state, action: PayloadAction<number>) => {
      state.currentTrackIndex = action.payload;
      console.log(state.currentTrackIndex, action.payload);
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

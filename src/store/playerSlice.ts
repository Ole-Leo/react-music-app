import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrackData } from '../types/types';

type TrackState = TrackData | null;

const initialState = {
  tracks: [] as TrackState[],
  currentTrack: null as TrackState,
  isPlaying: false,
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
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { getTracks, getCurrentTrack, setIsPlaying } = playerSlice.actions;

export default playerSlice.reducer;

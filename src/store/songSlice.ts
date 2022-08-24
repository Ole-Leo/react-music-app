import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MusicData } from '../types/types';

type SongState = MusicData | null;
// type SongState = number | null;

const initialState = null as SongState;

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    playSong: (state, action: PayloadAction<MusicData>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { playSong } = songSlice.actions;

export default songSlice.reducer;

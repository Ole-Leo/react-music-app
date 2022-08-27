import { configureStore } from '@reduxjs/toolkit';
import { tracksAPI } from './tracksAPI';
import { playerReducer } from './playerSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [tracksAPI.reducerPath]: tracksAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tracksAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

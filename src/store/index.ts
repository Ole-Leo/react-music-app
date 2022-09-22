import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { tracksAPI } from './tracksAPI';
import { playerReducer } from './slices/playerSlice';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    filter: filterReducer,
    [tracksAPI.reducerPath]: tracksAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tracksAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

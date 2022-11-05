import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { tracksAPI } from './api/tracksAPI';
import { authAPI } from './api/authAPI';
import { playerReducer } from './slices/playerSlice';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    filter: filterReducer,
    [tracksAPI.reducerPath]: tracksAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(tracksAPI.middleware)
      .concat(authAPI.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;

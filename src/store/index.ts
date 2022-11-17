import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authAPI } from './api/authAPI';
import { tracksAPI } from './api/tracksAPI';
import { userReducer } from './slices/userSlice';
import { playerReducer } from './slices/playerSlice';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
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

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authAPI } from './api/authAPI';
import { tracksAPI } from './api/tracksAPI';
import { userReducer } from './features/userSlice';
import { playerReducer } from './features/playerSlice';
import { filterReducer } from './features/filterSlice';
import { tokenReducer } from './features/tokenSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    player: playerReducer,
    filter: filterReducer,
    token: tokenReducer,
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

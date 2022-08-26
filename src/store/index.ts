import { configureStore } from '@reduxjs/toolkit';
import { tracksAPI } from './tracksAPI';
import playerReducer from './playerSlice';

const store = configureStore({
  reducer: {
    player: playerReducer,
    [tracksAPI.reducerPath]: tracksAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tracksAPI.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

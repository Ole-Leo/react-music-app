import { configureStore } from '@reduxjs/toolkit';
import songReducer from './songSlice';
import { songsAPI } from './songsAPI';

const store = configureStore({
  reducer: {
    song: songReducer,
    [songsAPI.reducerPath]: songsAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(songsAPI.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

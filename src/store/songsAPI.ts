import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MusicData } from '../types/types';

export const songsAPI = createApi({
  reducerPath: 'songsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://51.250.72.80:8090/`,
  }),
  endpoints: build => ({
    getSongs: build.query<MusicData[], void>({
      query: () => `catalog/track/all/`,
    }),
    getSong: build.query<MusicData, number | null>({
      query: id => `catalog/track/${id}`,
    }),
  }),
});

export const { useGetSongsQuery, useGetSongQuery } = songsAPI;

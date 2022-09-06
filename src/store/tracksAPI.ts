import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TrackData } from '../models/types';
import { URL } from '../utils/utils';

export const tracksAPI = createApi({
  reducerPath: 'tracksAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: build => ({
    getTracks: build.query<TrackData[], void>({
      query: () => `catalog/track/all/`,
    }),
  }),
});

export const { useGetTracksQuery } = tracksAPI;

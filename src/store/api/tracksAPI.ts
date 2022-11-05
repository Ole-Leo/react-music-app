import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CollectionData, TrackData } from '../../models/types';
import { URL } from '../../models/utils';

export const tracksAPI = createApi({
  reducerPath: 'tracksAPI',
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: build => ({
    getTracks: build.query<TrackData[], void>({
      query: () => `catalog/track/all/`,
    }),
    getCollection: build.query<CollectionData, number>({
      query: (id: number) => `catalog/selection/${id}/`,
    }),
  }),
});

export const { useGetTracksQuery, useGetCollectionQuery } = tracksAPI;

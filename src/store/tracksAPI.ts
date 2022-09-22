import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CollectionData, TrackData } from '../models/types';
import { URL } from '../utils/utils';

export const tracksAPI = createApi({
  reducerPath: 'tracksAPI',
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: build => ({
    getTracks: build.query<TrackData[], void>({
      query: () => `catalog/track/all/`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tracks' as const, id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
    }),
    getCollection: build.query<CollectionData, number>({
      query: (id: number) => `catalog/selection/${id}/`,
      providesTags: result =>
        result?.items
          ? [
              ...result.items.map(({ id }) => ({
                type: 'Tracks' as const,
                id,
              })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
    }),
  }),
});

export const { useGetTracksQuery, useGetCollectionQuery } = tracksAPI;

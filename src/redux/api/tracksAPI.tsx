import { authAPI } from './authAPI';
import { CollectionData, TrackData } from '../../models/types';

export const tracksAPI = authAPI.injectEndpoints({
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

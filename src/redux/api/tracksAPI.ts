import { authAPI } from './authAPI';
import { CollectionData, TrackData } from '../../models/types';

export const tracksAPI = authAPI.injectEndpoints({
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

    getTrack: build.query<TrackData, number>({
      query: (trackId: number) => `catalog/track/${trackId}/`,
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

    addFavorite: build.mutation<void, number>({
      query: (id: number) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
    }),

    removeFavorite: build.mutation({
      query: (id: number) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTracksQuery,
  useGetCollectionQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} = tracksAPI;

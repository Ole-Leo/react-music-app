import {
  useAddFavoriteMutation,
  useGetTracksQuery,
  useRemoveFavoriteMutation,
} from '../redux/api/tracksAPI';
import { useAppSelector } from './reduxHook';
import { getUserIdFromJWT } from '../utils/utils';
import { TrackData, User } from '../models/types';
import { useEffect, useState } from 'react';

export const useFavoriteTrack = (track: TrackData) => {
  const { access } = useAppSelector(state => state.token);
  const [addFavoriteTrack] = useAddFavoriteMutation();
  const [removeFavoriteTrack] = useRemoveFavoriteMutation();

  const isStaredUser = (staredUser: User[]) => {
    const user = staredUser.find(
      (user: User) => user.id === (access ? getUserIdFromJWT(access) : 0)
    );
    return user ? true : false;
  };

  const favorite: boolean = track ? isStaredUser(track.stared_user) : false;

  const toggleFavoriteTrack = async (trackId: number) => {
    const toggle = favorite ? removeFavoriteTrack : addFavoriteTrack;
    try {
      await toggle(trackId).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return { favorite, toggleFavoriteTrack };
};

export const useGetFavoriteTracks = () => {
  const { data, isLoading } = useGetTracksQuery();
  const { access } = useAppSelector(state => state.token);
  const [favoriteTracks, setFavoriteTracks] = useState<TrackData[]>([]);

  useEffect(() => {
    if (data) {
      setFavoriteTracks(
        data.filter(track =>
          track.stared_user.find(user => user.id === getUserIdFromJWT(access))
        )
      );
    }
  }, [access, data]);

  return { favoriteTracks, isLoading };
};

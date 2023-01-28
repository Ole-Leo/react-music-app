import {
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} from '../redux/api/tracksAPI';
import { useAppSelector } from './reduxHook';
import { getUserIdFromJWT } from '../utils/utils';
import { TrackData, User } from '../models/types';

export const useFavoriteTrack = (track: TrackData) => {
  const { access } = useAppSelector(state => state.token);
  const [addFavoriteTrack] = useAddFavoriteMutation();
  const [removeFavoriteTrack] = useRemoveFavoriteMutation();

  const isStaredUser = (starredUser: User[]) => {
    const user = starredUser.find(
      (el: User) => el.id === (access ? getUserIdFromJWT(access) : 0)
    );
    return user ? true : false;
  };

  const favorite: boolean = track ? isStaredUser(track.stared_user) : false;

  const toggleFavoriteTrack = async (trackId: number) => {
    const handler = favorite ? removeFavoriteTrack : addFavoriteTrack;
    try {
      await handler(trackId).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return { favorite, toggleFavoriteTrack };
};

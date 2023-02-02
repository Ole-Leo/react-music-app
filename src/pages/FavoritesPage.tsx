import { Title } from '../components/Title/Title';
import { Search } from '../components/Search/Search';
import { Playlist } from '../components/Playlist/Playlist';
import { useFilterTracks } from '../hooks/useFilteredTracks';
import { useGetFavoriteTracks } from '../hooks/useFavoriteTrack';

export const FavoritesPage = () => {
  const { favoriteTracks, isLoading } = useGetFavoriteTracks();
  const { searchQuery, filteredTracks, changeHandler } =
    useFilterTracks(favoriteTracks);

  return (
    <>
      <Search query={searchQuery} onChange={changeHandler} />
      <Title text="Мои треки" />
      <Playlist tracks={filteredTracks} isLoading={false} />
    </>
  );
};

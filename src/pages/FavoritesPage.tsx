import { Title } from '../components/Title/Title';
import { Search } from '../components/Search/Search';
import { Playlist } from '../components/Playlist/Playlist';
import { useFilterTracks } from '../hooks/useFilteredTracks';
import { useGetFavoriteTracks } from '../hooks/useFavoriteTrack';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const FavoritesPage = () => {
  const { favoriteTracks, isLoading } = useGetFavoriteTracks();
  const { searchQuery, filteredTracks, changeHandler } =
    useFilterTracks(favoriteTracks);

  return (
    <>
      <div className="playlist">
        <Search query={searchQuery} onChange={changeHandler} />
        <Title text="Мои треки" />
        <Playlist tracks={filteredTracks} isLoading={isLoading} />
      </div>
      <Sidebar isOffersShown={false} />
    </>
  );
};

import { MUSIC_DATA } from '../data';
import { Title } from '../components/Title/Title';
import { Search } from '../components/Search/Search';
import { Playlist } from '../components/Playlist/Playlist';
import { useFilterTracks } from '../hooks/useFilteredTracks';

export const FavoritesPage = () => {
  const data = MUSIC_DATA;

  const { searchQuery, filteredTracks, changeHandler } = useFilterTracks(data);

  return (
    <>
      <Search query={searchQuery} onChange={changeHandler} />
      <Title text="Мои треки" />
      <Playlist tracks={filteredTracks} isLoading={false} />
    </>
  );
};

import { Playlist } from '../components/Playlist/Playlist';
import { Search } from '../components/Search/Search';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Title } from '../components/Title/Title';
import { MUSIC_DATA } from '../data';
import { useFilterTracks } from '../hooks/useFilteredTracks';

export const FavoritesPage = () => {
  const data = MUSIC_DATA;

  const { searchQuery, filteredTracks, changeHandler } = useFilterTracks(data);

  return (
    <main className="main">
      <div className="main-content">
        <Search query={searchQuery} onChange={changeHandler} />
        <Title text="Мои треки" />
        <Playlist tracks={filteredTracks} loading={false} />
      </div>
      <Sidebar isOffersShown={false} />
    </main>
  );
};

import { MUSIC_DATA } from '../data';
import { Title } from '../components/Title/Title';
import { Search } from '../components/Search/Search';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Playlist } from '../components/Playlist/Playlist';
import { useFilterTracks } from '../hooks/useFilteredTracks';
import { Navigation } from '../components/Navigation/Navigation';

export const FavoritesPage = () => {
  const data = MUSIC_DATA;

  const { searchQuery, filteredTracks, changeHandler } = useFilterTracks(data);

  return (
    <main className="content">
      <Navigation />
      <div className="main-content">
        <Search query={searchQuery} onChange={changeHandler} />
        <Title text="Мои треки" />
        <Playlist tracks={filteredTracks} loading={false} />
      </div>
      <Sidebar isOffersShown={false} />
    </main>
  );
};

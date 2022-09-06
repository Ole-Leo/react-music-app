import Filter from '../components/Filter/Filter';
import Playlist from '../components/Playlist/Playlist';
import Search from '../components/Search/Search';
import Sidebar from '../components/Sidebar/Sidebar';
import Title from '../components/Title/Title';
import useFilterTracks from '../hooks/useFilterTracks';
import { useGetTracksQuery } from '../store/tracksAPI';

const MainPage = () => {
  const { data = [], isLoading } = useGetTracksQuery();
  const { searchQuery, filteredTracks, changeHandler, artists, genre, year } =
    useFilterTracks(data);

  return (
    <main className="main">
      <div className="main-content">
        <Search query={searchQuery} onChange={changeHandler} />
        <Title text="Треки" />
        <Filter year={year} artist={artists} genre={genre} />
        <Playlist tracks={filteredTracks} loading={isLoading} />
      </div>
      <Sidebar />
    </main>
  );
};

export default MainPage;

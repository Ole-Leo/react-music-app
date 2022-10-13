import { Filter } from '../components/Filter/Filter';
import { Playlist } from '../components/Playlist/Playlist';
import { Search } from '../components/Search/Search';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Title } from '../components/Title/Title';
import { useFilterTracks } from '../hooks/useFilteredTracks';
import { useSortedTracks } from '../hooks/useSortedTracks';
import { useGetTracksQuery } from '../store/tracksAPI';

export const MainPage = () => {
  const { data = [], isLoading } = useGetTracksQuery();
  const { searchQuery, filteredTracks, changeHandler } = useFilterTracks(data);
  const { author, genre, year, sortedTracks } = useSortedTracks(filteredTracks);
  const sortedData = sortedTracks.length > 0 ? sortedTracks : filteredTracks;

  return (
    <main className="main">
      <div className="main-content">
        <Search query={searchQuery} onChange={changeHandler} />
        <Title text="Треки" />
        <Filter year={year} author={author} genre={genre} />
        <Playlist tracks={sortedData} loading={isLoading} />
      </div>
      <Sidebar />
    </main>
  );
};

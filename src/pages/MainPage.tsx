import { Title } from '../components/Title/Title';
import { Filter } from '../components/Filter/Filter';
import { Search } from '../components/Search/Search';
import { useGetTracksQuery } from '../store/api/tracksAPI';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Playlist } from '../components/Playlist/Playlist';
import { useSortedTracks } from '../hooks/useSortedTracks';
import { useFilterTracks } from '../hooks/useFilteredTracks';
import { Navigation } from '../components/Navigation/Navigation';
import { AudioPlayer } from '../components/AudioPlayer/AudioPlayer';

export const MainPage = () => {
  const { data = [], isLoading } = useGetTracksQuery();
  const { searchQuery, filteredTracks, changeHandler } = useFilterTracks(data);
  const { author, genre, year, sortedTracks } = useSortedTracks(filteredTracks);
  const sortedData = sortedTracks.length > 0 ? sortedTracks : filteredTracks;

  return (
    <>
      <main className="content">
        <Navigation />
        <div className="main-content">
          <Search query={searchQuery} onChange={changeHandler} />
          <Title text="Треки" />
          <Filter year={year} author={author} genre={genre} />
          <Playlist tracks={sortedData} loading={isLoading} />
        </div>
        <Sidebar />
      </main>
      <AudioPlayer />
    </>
  );
};

import { useParams } from 'react-router-dom';
import { Title } from '../components/Title/Title';
import { Search } from '../components/Search/Search';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Playlist } from '../components/Playlist/Playlist';
import { useFilterTracks } from '../hooks/useFilteredTracks';
import { useGetCollectionQuery } from '../store/api/tracksAPI';
import { Navigation } from '../components/Navigation/Navigation';
import { AudioPlayer } from '../components/AudioPlayer/AudioPlayer';

export const CollectionPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCollectionQuery(Number(id));
  const { searchQuery, filteredTracks, changeHandler } = useFilterTracks(
    data?.items
  );

  return (
    <>
      <main className="content">
        <Navigation />
        <div className="main-content">
          <Search query={searchQuery} onChange={changeHandler} />
          <Title text={data?.name} />
          <Playlist tracks={filteredTracks} isLoading={isLoading} />
        </div>
        <Sidebar isOffersShown={false} />
      </main>
      <AudioPlayer />
    </>
  );
};

import { useParams } from 'react-router-dom';
import { Title } from '../components/Title/Title';
import { Search } from '../components/Search/Search';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Playlist } from '../components/Playlist/Playlist';
import { useFilterTracks } from '../hooks/useFilteredTracks';
import { useGetCollectionQuery } from '../redux/api/tracksAPI';

export const CollectionPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetCollectionQuery(Number(id));
  const { searchQuery, filteredTracks, changeHandler } = useFilterTracks(
    data?.items
  );

  return (
    <>
      <div className="playlist">
        <Search query={searchQuery} onChange={changeHandler} />
        <Title text={data?.name} isLoading={isLoading} />
        <Playlist tracks={filteredTracks} isLoading={isLoading} />
      </div>
      <Sidebar isOffersShown={false} />
    </>
  );
};

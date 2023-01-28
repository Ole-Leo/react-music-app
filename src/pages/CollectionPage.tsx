import { useParams } from 'react-router-dom';
import { Title } from '../components/Title/Title';
import { Search } from '../components/Search/Search';
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
      <Search query={searchQuery} onChange={changeHandler} />
      <Title text={data?.name} />
      <Playlist tracks={filteredTracks} isLoading={isLoading} />
    </>
  );
};

import { Title } from '../components/Title/Title';
import { Filter } from '../components/Filter/Filter';
import { Search } from '../components/Search/Search';
import { Playlist } from '../components/Playlist/Playlist';
import { useSortedTracks } from '../hooks/useSortedTracks';
import { useGetTracksQuery } from '../redux/api/tracksAPI';
import { useFilterTracks } from '../hooks/useFilteredTracks';

export const MainPage = () => {
  const { data, isLoading } = useGetTracksQuery();
  const { searchQuery, filteredTracks, changeHandler } = useFilterTracks(data);
  const { author, genre, year, sortedTracks } = useSortedTracks(filteredTracks);
  const sortedData = sortedTracks.length > 0 ? sortedTracks : filteredTracks;

  return (
    <>
      <Search query={searchQuery} onChange={changeHandler} />
      <Title text="Треки" />
      <Filter year={year} author={author} genre={genre} />
      <Playlist tracks={sortedData} isLoading={isLoading} />
    </>
  );
};

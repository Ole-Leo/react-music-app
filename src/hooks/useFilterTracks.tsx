import { useEffect, useState } from 'react';
import { TrackData } from '../models/types';

const useFilterTracks = (data: TrackData[] = []) => {
  const [filteredTracks, setFilteredTracks] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value.toLocaleLowerCase());
  };

  useEffect(() => {
    setFilteredTracks(
      data.filter(
        item =>
          item.name.toLocaleLowerCase().includes(searchQuery) ||
          item.author.toLocaleLowerCase().includes(searchQuery)
      )
    );
  }, [data, searchQuery]);

  const artists = Array.from(new Set(data.map(track => track.author)));
  const genre = Array.from(new Set(data.map(track => track.genre)));
  const year = Array.from(
    new Set(
      data.map(track => track.release_date && track.release_date.slice(0, 4))
    )
  );
  // const year = ['Более новые', 'Более старые'];

  return { searchQuery, filteredTracks, changeHandler, artists, genre, year };
};

export default useFilterTracks;

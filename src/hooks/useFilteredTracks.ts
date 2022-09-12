import { useEffect, useState } from 'react';
import { TrackData } from '../models/types';

const useFilterTracks = (data: TrackData[]) => {
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

  return { searchQuery, filteredTracks, changeHandler };
};

export { useFilterTracks };

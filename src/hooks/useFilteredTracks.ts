import { TrackData } from '../models/types';
import { useEffect, useState } from 'react';

export const useFilterTracks = (data: TrackData[] | undefined) => {
  const [filteredTracks, setFilteredTracks] = useState<TrackData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value.toLocaleLowerCase());
  };

  useEffect(() => {
    if (data) {
      setFilteredTracks(
        data.filter(
          item =>
            item.name.toLocaleLowerCase().includes(searchQuery) ||
            item.author.toLocaleLowerCase().includes(searchQuery)
        )
      );
    }
  }, [data, searchQuery]);

  return { searchQuery, filteredTracks, changeHandler };
};

import { useEffect, useState } from 'react';
import { TrackData } from '../models/types';
import { useAppSelector } from './reduxHook';

const useSortedTracks = (data: TrackData[]) => {
  const [sortedTracks, setSortedTracks] = useState(data);
  const { filter } = useAppSelector(state => state.filter);
  const author = Array.from(new Set(data.map(track => track.author)))
    .sort()
    .slice(1);
  const genre = Array.from(new Set(data.map(track => track.genre)));
  const year = Array.from(
    new Set(
      data.map(track => track.release_date && track.release_date.slice(0, 4))
    )
  ).sort();

  useEffect(() => {
    setSortedTracks(
      data.filter(
        track =>
          filter.includes(track.author) ||
          filter.includes(track.genre) ||
          filter.includes(track.release_date?.slice(0, 4))
      )
    );
  }, [data, filter]);

  return { author, genre, year, sortedTracks };
};

export { useSortedTracks };

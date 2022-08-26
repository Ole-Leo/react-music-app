import './Filter.css';

import { FC } from 'react';
import block from 'bem-cn-lite';
import FilteredList from './FilteredList';
import { useGetTracksQuery } from '../../store/tracksAPI';

export const filter = block('filter');

const Filter: FC = () => {
  const { data: tracks } = useGetTracksQuery();

  const artists = Array.from(new Set(tracks?.map(track => track.author)));
  const genre = Array.from(new Set(tracks?.map(track => track.genre)));

  return (
    <div className={filter()}>
      <span className={filter('text')}>Искать по:</span>
      <FilteredList text="году выпуска" name="year" list={genre} />
      <FilteredList text="исполнителю" name="artist" list={artists} />
      <FilteredList text="жанру" name="genre" list={genre} />
    </div>
  );
};

export default Filter;

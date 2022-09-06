import './Filter.css';

import { FC } from 'react';
import block from 'bem-cn-lite';
import FilteredList from './FilteredList';

export const filter = block('filter');

type FilterProps = {
  year: string[];
  artist: string[];
  genre: string[];
};

const Filter: FC<FilterProps> = ({ year, artist, genre }) => {
  return (
    <div className={filter()}>
      <span className={filter('text')}>Искать по:</span>
      <FilteredList text="году выпуска" name="year" list={year} />
      <FilteredList text="исполнителю" name="artist" list={artist} />
      <FilteredList text="жанру" name="genre" list={genre} />
    </div>
  );
};

export default Filter;

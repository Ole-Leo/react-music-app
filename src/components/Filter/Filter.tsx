import './Filter.css';

import { FC } from 'react';
import block from 'bem-cn-lite';
import { FilteredList } from './FilteredList';

export const filter = block('filter');

type FilterProps = {
  year: string[];
  author: string[];
  genre: string[];
};

export const Filter: FC<FilterProps> = ({ year, author, genre }) => {
  return (
    <div className={filter()}>
      <span className={filter('text')}>Искать по:</span>
      <FilteredList text="году выпуска" name="year" list={year} />
      <FilteredList text="исполнителю" name="artist" list={author} />
      <FilteredList text="жанру" name="genre" list={genre} />
    </div>
  );
};

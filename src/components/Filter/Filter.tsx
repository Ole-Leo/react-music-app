import { FC } from 'react';
import block from 'bem-cn-lite';

import './Filter.css';
import FilteredList from './FilteredList';

export const filter = block('filter');

const Filter: FC = () => {
  return (
    <div className={filter()}>
      <span className={filter('text')}>Искать по:</span>
      <FilteredList text="исполнителю" name="artist" />
      <FilteredList text="году выпуска" name="year" />
      <FilteredList text="жанру" name="genre" />
    </div>
  );
};

export default Filter;

import { FC } from 'react';
import { FilteredList } from './FilteredList';

import styles from './styles.module.css';

type FilterProps = {
  year: string[];
  author: string[];
  genre: string[];
};

export const Filter: FC<FilterProps> = ({ year, author, genre }) => {
  return (
    <div className={styles.filter}>
      <span className={styles.text}>Искать по:</span>
      <FilteredList text="году выпуска" name="year" list={year} />
      <FilteredList text="исполнителю" name="artist" list={author} />
      <FilteredList text="жанру" name="genre" list={genre} />
    </div>
  );
};

import { FilteredList } from './FilteredList';

import styles from './styles.module.css';

type Props = {
  year: string[];
  author: string[];
  genre: string[];
};

export const Filter = ({ year, author, genre }: Props) => {
  return (
    <div className={styles.filter}>
      <span className={styles.text}>Искать по:</span>
      <FilteredList text="году выпуска" name="year" list={year} />
      <FilteredList text="исполнителю" name="artist" list={author} />
      <FilteredList text="жанру" name="genre" list={genre} />
    </div>
  );
};

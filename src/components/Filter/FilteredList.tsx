import { List } from './List';
import { FC, useRef, useState } from 'react';
import { Button, ButtonProps } from './Button';
import { useOnClickOutside } from '../../hooks/useOutside';

import styles from './styles.module.css';

type FilteredListProps = ButtonProps & {
  list: string[];
};

export const FilteredList: FC<FilteredListProps> = ({ text, name, list }) => {
  const ref = useRef(null);
  const [isListShown, setIsListShown] = useState(false);

  useOnClickOutside(ref, () => setIsListShown(false));

  const toggleList = () => {
    setIsListShown(!isListShown);
  };

  return (
    <div className={styles.filteredList}>
      <Button text={text} name={name} onClick={toggleList} />
      <div ref={ref}>{isListShown && <List list={list} />}</div>
    </div>
  );
};

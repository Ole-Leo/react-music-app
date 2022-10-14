import { FC } from 'react';
import { ListItem } from './ListItem';

import styles from './styles.module.css';

type ListProps = {
  list: string[];
};

export const List: FC<ListProps> = ({ list }) => {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {list &&
          list.map(listitem => <ListItem key={listitem} name={listitem} />)}
      </ul>
    </div>
  );
};

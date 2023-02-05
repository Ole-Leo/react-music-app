import { ListItem } from './ListItem';

import styles from './styles.module.css';

type Props = {
  list: string[];
};

export const List = ({ list }: Props) => {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {list &&
          list.map(listitem => <ListItem key={listitem} name={listitem} />)}
      </ul>
    </div>
  );
};

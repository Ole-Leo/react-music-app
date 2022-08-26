import { FC } from 'react';
import { filter } from './Filter';
import ListItem from './ListItem';

type ListProps = {
  list: string[];
};

const List: FC<ListProps> = ({ list }) => {
  return (
    <div className={filter('list-container')}>
      <ul className={filter('list')}>
        {list &&
          list.map(listitem => <ListItem key={listitem} name={listitem} />)}
      </ul>
    </div>
  );
};

export default List;

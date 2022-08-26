import { FC } from 'react';
import { filter } from './Filter';

type ListItemProps = {
  name: string;
};

const ListItem: FC<ListItemProps> = ({ name }) => {
  return (
    <li className={filter('listItem')}>
      <input className={filter('listItem-input')} type="checkbox" id={name} />
      <label htmlFor={name}>{name}</label>
    </li>
  );
};

export default ListItem;

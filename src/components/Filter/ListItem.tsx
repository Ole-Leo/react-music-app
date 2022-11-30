import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useActions } from '../../redux/actions';
import { useAppSelector } from '../../hooks/reduxHook';

import styles from './styles.module.css';

type ListItemProps = {
  name: string;
};

export const ListItem: FC<ListItemProps> = ({ name }) => {
  const [checked, setChecked] = useState(false);
  const { addFilter, cleanFilter } = useActions();
  const { filter: filteredList } = useAppSelector(state => state.filter);

  const toggleClick = (name: string) => {
    filteredList.includes(name) ? cleanFilter(name) : addFilter(name);
  };

  useEffect(() => {
    filteredList.includes(name) ? setChecked(true) : setChecked(false);
  }, [filteredList, name]);

  return (
    <li
      className={cn(styles.listItem, checked && styles.active)}
      onClick={() => toggleClick(name)}
    >
      {name}
    </li>
  );
};

import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHook';
import { useActions } from '../../store/actions';
import { filter } from './Filter';

type ListItemProps = {
  name: string;
};

const ListItem: FC<ListItemProps> = ({ name }) => {
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
      className={filter('listItem', { active: checked })}
      onClick={() => toggleClick(name)}
    >
      {name}
    </li>
  );
};

export default ListItem;

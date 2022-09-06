import { FC } from 'react';
import { filter } from './Filter';

type ListItemProps = {
  name: string;
};

const ListItem: FC<ListItemProps> = ({ name }) => {
  // const [checked, setChecked] = useState(false);
  // console.log(checked);

  return (
    <li className={filter('listItem')}>
      <input
        className={filter('listItem-input')}
        type="checkbox"
        id={name}
        // checked={checked}
        // onChange={e => setChecked(e.target.checked)}
      />
      <label htmlFor={name}>{name}</label>
    </li>
  );
};

export default ListItem;

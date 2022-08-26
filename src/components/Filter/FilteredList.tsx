import { FC, useRef, useState } from 'react';
import List from './List';
import { filter } from './Filter';
import Button, { ButtonProps } from './Button';
import { useOnClickOutside } from '../../hooks/useOutside';

type FilteredListProps = ButtonProps & {
  list: string[];
};

const FilteredList: FC<FilteredListProps> = ({ text, name, list }) => {
  const ref = useRef(null);
  const [isListShown, setIsListShown] = useState(false);

  useOnClickOutside(ref, () => setIsListShown(false));

  const toggleList = () => {
    setIsListShown(!isListShown);
  };

  return (
    <div className={filter('filteredList')}>
      <Button text={text} name={name} onClick={toggleList} />
      <div ref={ref}>{isListShown && <List list={list} />}</div>
    </div>
  );
};

export default FilteredList;

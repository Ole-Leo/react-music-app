import { FC, useState, MouseEvent } from 'react';
import List from './List';
import { filter } from './Filter';
import Button, { ButtonProps } from './Button';

type FilteredListProps = ButtonProps;

const FilteredList: FC<FilteredListProps> = ({ text, name }) => {
  const [isListShown, setIsListShown] = useState(false);

  const toggleList = (event: MouseEvent<HTMLButtonElement>) => {
    setIsListShown(!isListShown);
  };

  return (
    <>
      <div className={filter('filteredList')}>
        <Button text={text} name={name} onClick={toggleList} />
        {isListShown && <List />}
      </div>
    </>
  );
};

export default FilteredList;

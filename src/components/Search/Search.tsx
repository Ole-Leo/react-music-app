import { ChangeEvent, FC, useState } from 'react';
import block from 'bem-cn-lite';
import svgIcon from '../../assets/svg/sprite.svg';

import './Search.css';

const search = block('search');

const Search: FC = () => {
  const [query, setQuery] = useState('');

  const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  return (
    <div className={search()}>
      <svg className={search('icon')}>
        <use xlinkHref={`${svgIcon}#search`}></use>
      </svg>
      <input
        className={search('input')}
        type="search"
        placeholder="Поиск"
        value={query}
        onChange={changeValueHandler}
      />
    </div>
  );
};

export default Search;

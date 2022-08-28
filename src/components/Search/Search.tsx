import { FC } from 'react';
import block from 'bem-cn-lite';
import svgIcon from '../../assets/svg/sprite.svg';

import './Search.css';

const search = block('search');

type SearchProps = {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: FC<SearchProps> = ({ query, onChange }) => {
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
        onChange={onChange}
      />
    </div>
  );
};

export default Search;

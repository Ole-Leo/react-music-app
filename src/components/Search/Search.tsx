import svgIcon from '../../assets/svg/sprite.svg';

import styles from './styles.module.css';

type Props = {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ query, onChange }: Props) => {
  return (
    <div className={styles.search}>
      <svg className={styles.icon}>
        <use xlinkHref={`${svgIcon}#search`}></use>
      </svg>
      <input
        className={styles.input}
        type="search"
        placeholder="Поиск"
        value={query}
        onChange={onChange}
      />
    </div>
  );
};

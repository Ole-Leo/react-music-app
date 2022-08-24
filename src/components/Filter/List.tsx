import { FC } from 'react';
import { filter } from './Filter';

const List: FC = () => {
  return (
    <ul className={filter('list')}>
      <li>
        <input
          className={filter('list-input')}
          type="checkbox"
          id="checkbox-1"
        />
        <label htmlFor="checkbox-1">Michael Jackson</label>
      </li>
      <li>
        <input
          className={filter('list-input')}
          type="checkbox"
          id="checkbox-2"
        />
        <label htmlFor="checkbox-2">Frank Sinatra</label>
      </li>
      <li>
        <input
          className={filter('list-input')}
          type="checkbox"
          id="checkbox-3"
        />
        <label htmlFor="checkbox-3">Arctic Monkeys</label>
      </li>
      <li>
        <input
          className={filter('list-input')}
          type="checkbox"
          id="checkbox-4"
        />
        <label htmlFor="checkbox-4">Calvin Harris</label>
      </li>
      <li>
        <input
          className={filter('list-input')}
          type="checkbox"
          id="checkbox-5"
        />
        <label htmlFor="checkbox-5">Zhu</label>
      </li>
    </ul>
  );
};

export default List;

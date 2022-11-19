import { FC } from 'react';
import svgIcon from '../../assets/svg/sprite.svg';
import { useAppSelector } from '../../hooks/reduxHook';

import styles from './styles.module.css';

export const User: FC = () => {
  const { username } = useAppSelector(state => state.user);

  return (
    <div className={styles.user}>
      <p className={styles.name}>{username}</p>
      <div className={styles.avatar}>
        <svg className={styles.icon}>
          <use xlinkHref={`${svgIcon}#avatar`}></use>
        </svg>
      </div>
    </div>
  );
};

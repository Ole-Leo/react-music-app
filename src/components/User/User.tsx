import { FC } from 'react';
import svgIcon from '../../assets/svg/sprite.svg';

import styles from './styles.module.css';

export const User: FC = () => {
  return (
    <div className={styles.user}>
      <p className={styles.name}>User Login</p>
      <div className={styles.avatar}>
        <svg className={styles.icon}>
          <use xlinkHref={`${svgIcon}#avatar`}></use>
        </svg>
      </div>
    </div>
  );
};

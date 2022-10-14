import { FC } from 'react';

import styles from './styles.module.css';

export const User: FC = () => {
  return (
    <div className={styles.user}>
      <p className={styles.name}>User Login</p>
      <div className={styles.avatar}></div>
    </div>
  );
};

import { FC, useEffect } from 'react';
import svgIcon from '../../assets/svg/sprite.svg';
import { useActions } from '../../redux/actions';
import { useAppSelector } from '../../hooks/reduxHook';
import { useCurrentUserQuery } from '../../redux/api/userAPI';

import styles from './styles.module.css';

export const User: FC = () => {
  const { data: user } = useCurrentUserQuery();
  const { username } = useAppSelector(state => state.user);
  const { setUser } = useActions();

  useEffect(() => {
    if (user) setUser(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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

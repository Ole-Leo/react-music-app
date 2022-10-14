import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

type MenuItemProps = {
  href: string;
  text: string;
};

export const MenuItem: FC<MenuItemProps> = ({ href, text }) => {
  return (
    <li className={styles.menuItem}>
      <Link to={href} className={styles.menuLink}>
        {text}
      </Link>
    </li>
  );
};

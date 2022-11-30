import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

type MenuItemProps = {
  href: string;
  text: string;
  onClick?: React.MouseEventHandler;
};

export const MenuItem: FC<MenuItemProps> = ({ href, text, onClick }) => {
  return (
    <li className={styles.menuItem}>
      <Link to={href} className={styles.menuLink} onClick={onClick}>
        {text}
      </Link>
    </li>
  );
};

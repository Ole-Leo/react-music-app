import { FC } from 'react';
import { nav } from './Navigation';
import { Link } from 'react-router-dom';

type MenuItemProps = {
  href: string;
  text: string;
};

export const MenuItem: FC<MenuItemProps> = ({ href, text }) => {
  return (
    <li className={nav('menu-item')}>
      <Link to={href} className={nav('menu-link')}>
        {text}
      </Link>
    </li>
  );
};

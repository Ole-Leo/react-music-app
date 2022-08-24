import { FC } from 'react';
import { nav } from './Navigation';

type MenuItemProps = {
  href: string;
  text: string;
};

const MenuItem: FC<MenuItemProps> = ({ href, text }) => {
  return (
    <li className={nav('menu-item')}>
      <a href={href} className={nav('menu-link')}>
        {text}
      </a>
    </li>
  );
};

export default MenuItem;

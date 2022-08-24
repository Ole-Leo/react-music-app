import { FC, useState } from 'react';
import block from 'bem-cn-lite';
import Logo from '../Logo/Logo';
import logoWhite from '../../assets/svg/logo-white.svg';
import svgIcon from '../../assets/svg/sprite.svg';
import MenuItem from './MenuItem';

import './Navigation.css';

export const nav = block('nav');

const Navigation: FC = () => {
  const [isShown, setIsShown] = useState(true);

  const menuClickHandler = () => {
    setIsShown(prev => !prev);
  };

  return (
    <nav className={nav()}>
      <Logo href="/" img={logoWhite} />
      <div className={nav('burger')} onClick={menuClickHandler}>
        <svg className={nav('burger-svg')}>
          <use xlinkHref={`${svgIcon}#burger`}></use>
        </svg>
      </div>
      {isShown && (
        <ul className={nav('menu')}>
          <MenuItem href="/" text="Главное" />
          <MenuItem href="/" text="Мои треки" />
          <MenuItem href="/" text="Выйти" />
        </ul>
      )}
    </nav>
  );
};

export default Navigation;

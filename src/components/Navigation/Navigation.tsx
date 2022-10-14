import { Logo } from '../Logo/Logo';
import { MenuItem } from './MenuItem';
import { FC, useState } from 'react';
import logoWhite from '../../assets/svg/logo-white.svg';
import svgIcon from '../../assets/svg/sprite.svg';

import styles from './styles.module.css';

export const Navigation: FC = () => {
  const [isShown, setIsShown] = useState(true);

  const menuClickHandler = () => {
    setIsShown(prev => !prev);
  };

  return (
    <nav className={styles.nav}>
      <Logo href="/" img={logoWhite} />
      <div className={styles.burger} onClick={menuClickHandler}>
        <svg className={styles.burgerSvg}>
          <use xlinkHref={`${svgIcon}#burger`}></use>
        </svg>
      </div>
      {isShown && (
        <ul className={styles.menu}>
          <MenuItem href="/tracks" text="Главная" />
          <MenuItem href="/favorites" text="Мои треки" />
          <MenuItem href="/" text="Выйти" />
        </ul>
      )}
    </nav>
  );
};

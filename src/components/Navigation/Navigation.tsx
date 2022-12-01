import { Logo } from '../Logo/Logo';
import { FC, useState } from 'react';
import { MenuItem } from './MenuItem';
import { useActions } from '../../redux/actions';
import svgIcon from '../../assets/svg/sprite.svg';
import logoWhite from '../../assets/svg/logo-white.svg';

import styles from './styles.module.css';

export const Navigation: FC = () => {
  const { logout } = useActions();
  const [isShown, setIsShown] = useState(true);

  const clickHandler = () => {
    logout();
  };

  const menuClickHandler = () => {
    setIsShown(prev => !prev);
  };

  return (
    <nav className={styles.nav}>
      <Logo href="/" img={logoWhite} onClick={clickHandler} />
      <div className={styles.burger} onClick={menuClickHandler}>
        <svg className={styles.burgerSvg}>
          <use xlinkHref={`${svgIcon}#burger`}></use>
        </svg>
      </div>
      {isShown && (
        <ul className={styles.menu}>
          <MenuItem href="/tracks" text="Главная" />
          <MenuItem href="/favorites" text="Мои треки" />
          <MenuItem href="/" text="Выйти" onClick={clickHandler} />
        </ul>
      )}
    </nav>
  );
};

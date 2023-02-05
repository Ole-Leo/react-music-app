import { Logo } from '../Logo/Logo';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../../redux/actions';
import svgIcon from '../../assets/svg/sprite.svg';
import logoWhite from '../../assets/svg/logo-white.svg';

import styles from './styles.module.css';

export const Navigation: FC = () => {
  const { logout } = useActions();
  const [isShown, setIsShown] = useState(true);

  const menuClickHandler = () => {
    setIsShown(prev => !prev);
  };

  const logoutHandler = () => {
    logout();
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
          <li className={styles.menuItem}>
            <Link to="/" className={styles.menuLink}>
              Главная
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/favorites" className={styles.menuLink}>
              Мои треки
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              to="/login"
              className={styles.menuLink}
              onClick={logoutHandler}
            >
              Выйти
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

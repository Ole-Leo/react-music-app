import { FC } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

type PlayerBtnProps = {
  src: string;
  name?: string;
  onClick?: VoidFunction;
  isClicked?: boolean;
};

export const PlayerBtn: FC<PlayerBtnProps> = ({
  src,
  name,
  onClick,
  isClicked = false,
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[`${name}`],
        isClicked && styles.active
      )}
      onClick={onClick}
    >
      <svg className={classNames(styles.button, styles[`svg-${name}`])}>
        <use xlinkHref={src}></use>
      </svg>
    </button>
  );
};

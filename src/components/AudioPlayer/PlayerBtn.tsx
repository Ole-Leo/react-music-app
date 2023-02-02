import { FC } from 'react';
import cn from 'classnames';

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
  isClicked,
}) => {
  return (
    <button className={cn(styles.button, styles[`${name}`])} onClick={onClick}>
      <svg
        className={cn(
          styles.button,
          styles[`svg-${name}`],
          isClicked && styles.active
        )}
      >
        <use xlinkHref={src}></use>
      </svg>
    </button>
  );
};

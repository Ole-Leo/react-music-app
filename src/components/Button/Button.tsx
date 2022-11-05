import { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './style.module.css';

export type ButtonProps = {
  type?: 'action' | 'outlined' | 'secondary';
  size?: 's' | 'm' | 'l';
  btnStatus?: 'normal' | 'disabled';
  children?: ReactNode;
  btnType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
};

export const Button: FC<ButtonProps> = ({
  type = 'action',
  btnStatus = 'normal',
  children,
  btnType,
  onClick,
}) => {
  const buttonClassName = cn(
    styles.button,
    styles[`${type}`],
    styles[`${btnStatus}`]
  );

  return (
    <button
      type={btnType}
      onClick={onClick}
      className={buttonClassName}
      disabled={btnStatus === 'disabled'}
    >
      {children}
    </button>
  );
};

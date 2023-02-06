import { MouseEvent } from 'react';

import styles from './styles.module.css';

export type ButtonProps = {
  text: string;
  name?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ text, name, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} name={name} onClick={onClick}>
      {text}
    </button>
  );
};

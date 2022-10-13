import { FC, MouseEvent } from 'react';
import { filter } from './Filter';

export type ButtonProps = {
  text: string;
  name?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<ButtonProps> = ({ text, name, onClick }) => {
  return (
    <button className={filter('btn')} name={name} onClick={onClick}>
      {text}
    </button>
  );
};

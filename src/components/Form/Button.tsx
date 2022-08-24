import { FC } from 'react';
import { form } from './LoginForm';

type ButtonProps = {
  btnText: string;
  type?: string;
};

const Button: FC<ButtonProps> = ({ btnText, type }) => {
  return (
    <button className={form(`btn`, { [`${type}`]: true })}>{btnText}</button>
  );
};

export default Button;

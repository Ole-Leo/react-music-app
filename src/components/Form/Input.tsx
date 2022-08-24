import { ChangeEvent, FC, useState } from 'react';

import { form } from './LoginForm';

type InputProps = {
  type?: string;
  placeholder?: string;
};

const Input: FC<InputProps> = ({ type, placeholder }) => {
  const [value, setValue] = useState('');

  const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  return (
    <input
      className={form('input')}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={changeValueHandler}
    />
  );
};

export default Input;

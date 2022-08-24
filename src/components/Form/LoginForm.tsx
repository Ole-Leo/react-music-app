import { FC, FormEvent } from 'react';
import block from 'bem-cn-lite';
import Logo from '../Logo/Logo';
import Button from './Button';
import Input from './Input';
import logoBlack from '../../assets/svg/logo-black.svg';

import './Form.css';

export const form = block('form');

const LoginForm: FC = () => {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <form className={form()} onSubmit={submitHandler}>
        <h3 className={form('title')}>
          <Logo href="/" img={logoBlack} />
        </h3>
        <div className={form('inputs')}>
          <Input placeholder="Логин" />
          <Input type="password" placeholder="Пароль" />
        </div>
        <div className={form('buttons')}>
          <Button btnText="Войти" type="enter" />
          <Button btnText="Зарегистрироваться" type="sign-up" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

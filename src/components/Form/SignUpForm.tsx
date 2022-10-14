import { FC, FormEvent } from 'react';
import block from 'bem-cn-lite';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import Input from './Input';
import logoBlack from '../../assets/svg/logo-black.svg';

import './Form.css';

export const form = block('form');

const SignUpForm: FC = () => {
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
          <Input type="password" placeholder="Повторите пароль" />
        </div>
        <div className={form('buttons')}>
          <Button>Зарегистрироваться</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

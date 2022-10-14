import { FC, FormEvent } from 'react';
import block from 'bem-cn-lite';
import { Logo } from '../Logo/Logo';
import Input from './Input';
import logoBlack from '../../assets/svg/logo-black.svg';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

import './Form.css';

export const form = block('form');

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/register');
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    navigate('/tracks');
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
          <Button>Войти</Button>
          <Button btnType="button" type="outlined" onClick={clickHandler}>
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

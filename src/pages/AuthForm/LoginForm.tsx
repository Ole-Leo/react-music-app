import { FC } from 'react';
import classNames from 'classnames';
import { FormData } from '../../models/types';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components/Logo/Logo';
import { Button } from '../../components/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import logoBlack from '../../assets/svg/logo-black.svg';

import styles from './style.module.css';

const validEmail = new RegExp(/^[\w]{1}[\w-.]*@[\w-]+\.\w{2,3}$/i);
const validPassword = new RegExp(/^\d?(?:.*[a-zа-яА-Я])$/gi);
const validPasswordLength = 8;

export const LoginForm: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onTouched' });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    isValid && navigate('/tracks');
    reset();
  };

  const clickHandler = () => {
    navigate('/register');
  };

  const inputPasswordStyle = classNames(styles.input, styles.inputPassword);

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.logo}>
          <Logo img={logoBlack} href="/" />
        </div>
        <div className={styles.inputs}>
          <input
            className={styles.input}
            placeholder="E-mail"
            {...register('email', {
              required: 'Введите адрес эл. почты',
              pattern: {
                value: validEmail,
                message: 'Введите корректный адрес',
              },
            })}
          />
          <p className={styles.error}>
            {errors.email && <span>{errors.email.message}</span>}
          </p>

          <input
            className={inputPasswordStyle}
            placeholder="Пароль"
            type="password"
            {...register('password', {
              required: 'Введите пароль',
              minLength: {
                value: validPasswordLength,
                message: `Пароль должен быть не менее ${validPasswordLength} символов`,
              },
              pattern: {
                value: validPassword,
                message: `Пароль должен содержать буквы`,
              },
            })}
          />
          <p className={styles.error}>
            {errors.password && <span>{errors.password.message}</span>}
          </p>
        </div>
        <div className={styles.buttons}>
          <Button>{'Войти'}</Button>
          <Button type="outlined" btnType="button" onClick={clickHandler}>
            {'Зарегистрироваться'}
          </Button>
        </div>
      </form>
    </div>
  );
};

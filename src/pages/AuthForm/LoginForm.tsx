import {
  errorText,
  validEmail,
  validPassword,
  validPasswordLength,
} from '../../utils/const';
import { FC } from 'react';
import classNames from 'classnames';
import { AuthUserData } from '../../models/types';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components/Logo/Logo';
import { useAuthHook } from '../../hooks/useAuthHook';
import { Button } from '../../components/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import logoBlack from '../../assets/svg/logo-black.svg';

import styles from './style.module.css';
import { useLoginUserMutation } from '../../redux/api/userAPI';

export const LoginForm: FC = () => {
  const navigate = useNavigate();
  const [loginUser, { data: userData }] = useLoginUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AuthUserData>({ mode: 'onTouched' });

  const { error, isBlocked, authHandler, focusHandler } = useAuthHook(
    userData,
    loginUser,
    isValid,
    errorText.loginError
  );

  const onSubmit: SubmitHandler<AuthUserData> = async data => {
    console.log(data);
    await authHandler(data);
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
            onFocus={focusHandler}
            className={styles.input}
            placeholder="E-mail"
            {...register('email', {
              required: 'Введите email',
              pattern: {
                value: validEmail,
                message: 'Введите корректный email',
              },
            })}
          />
          <p className={styles.error}>
            {errors.email && <span>{errors.email.message}</span>}
          </p>

          <input
            onFocus={focusHandler}
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
        <p className={classNames(styles.error, styles.back)}>
          {error && <span>{error}</span>}
        </p>
        <div className={styles.buttons}>
          <Button btnStatus={isBlocked ? 'disabled' : 'normal'}>Войти</Button>
          <Button type="outlined" btnType="button" onClick={clickHandler}>
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  );
};

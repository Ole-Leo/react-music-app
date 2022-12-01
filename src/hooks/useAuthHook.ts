import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useAppSelector } from './reduxHook';
import { useActions } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { AuthUserData } from '../models/types';
import { useCurrentUserQuery, useGetTokenMutation } from '../redux/api/userAPI';

export const useAuthHook = (
  userData: AuthUserData,
  authUser: Function,
  isValid: boolean,
  errorText: string
) => {
  const navigate = useNavigate();
  const { setToken, setUser } = useActions();
  const [error, setError] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);
  const [getToken, { data: token, isSuccess }] = useGetTokenMutation();

  const authHandler = async (data: AuthUserData) => {
    setIsBlocked(true);
    setError('');
    try {
      if (isValid) {
        await authUser({
          ...data,
          username: data.email,
        }).unwrap();
        await getToken({ ...data }).unwrap();
      }
    } catch (error: any) {
      console.log(error);
      setError(error.data.password ? 'Пароль слишком лёгкий' : errorText);
      setIsBlocked(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setCredentials();
      navigate('/tracks');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const setCredentials = () => {
    setToken(token);
    setUser(userData);
    Cookies.set('access', token.access);
    Cookies.set('refresh', token.refresh);
  };

  const focusHandler = () => {
    setError('');
  };

  return { error, isBlocked, authHandler, focusHandler };
};

export const useCheckAuth = () => {
  const { setToken, setUser } = useActions();
  const { data: user } = useCurrentUserQuery();
  const { access } = useAppSelector(state => state.token);

  const checkToken = () => {
    if (access) return;
    setToken({
      access: Cookies.get('access')!,
      refresh: Cookies.get('refresh')!,
    });
  };

  useEffect(() => {
    if (user) setUser(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { checkToken };
};

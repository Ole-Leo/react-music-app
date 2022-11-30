import { useEffect, useState } from 'react';
import { useActions } from '../redux/actions';
import { AuthUserData } from '../models/types';
import { useNavigate } from 'react-router-dom';
import { useCurrentUserQuery, useGetTokenMutation } from '../redux/api/authAPI';
import { useCookies } from 'react-cookie';
import { parseJWT } from '../utils/utils';
import { useAppSelector } from './reduxHook';

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
  const [cookies, setCookie] = useCookies(['access', 'refresh']);
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
    setCookie('access', token.access);
    setCookie('refresh', token.refresh);
    console.log(parseJWT(token.refresh));
  };

  const focusHandler = () => {
    setError('');
  };

  return { error, isBlocked, authHandler, focusHandler, cookies };
};

export const useCheckAuth = () => {
  const { setToken, setUser } = useActions();
  const { data: user } = useCurrentUserQuery();
  const [cookies] = useCookies(['access', 'refresh']);
  const { access, refresh } = useAppSelector(state => state.token);

  const checkToken = () => {
    if (access || refresh) return;
    setToken({ access: cookies.access, refresh: cookies.refresh });
  };

  useEffect(() => {
    if (user) setUser(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { checkToken };
};

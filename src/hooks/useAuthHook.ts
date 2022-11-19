import { AuthUserData } from '../models/types';
import { useEffect, useState } from 'react';
import { useActions } from '../store/actions';
import { useNavigate } from 'react-router-dom';

export const useAuthHook = (
  userData: AuthUserData,
  authUser: Function,
  isSuccess: boolean,
  isValid: boolean,
  reset: Function,
  errorText: string
) => {
  const navigate = useNavigate();
  const { addUser } = useActions();
  const [error, setError] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);

  const authHandler = async (data: AuthUserData) => {
    setIsBlocked(true);
    setError('');
    try {
      if (isValid) {
        await authUser({
          email: data.email,
          username: data.email,
          password: data.password,
        }).unwrap();
        reset();
        navigate('/tracks');
      }
    } catch (error: any) {
      console.log(error);
      setError(error.data.password ? 'Пароль слишком лёгкий' : errorText);
      setIsBlocked(false);
    }
  };

  useEffect(() => {
    isSuccess && addUser(userData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, userData]);

  const focusHandler = () => {
    setError('');
  };

  return { error, isBlocked, authHandler, focusHandler };
};

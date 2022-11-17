import { AuthUserData } from '../models/types';
import { useState } from 'react';
import { useActions } from '../store/actions';
import { useNavigate } from 'react-router-dom';

export const useAuthHook = (
  authUser: Function,
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
        addUser(data.email);
        reset();
        navigate('/tracks');
      }
    } catch (error: any) {
      console.log(error);
      setError(error.data.password ? 'Пароль слишком лёгкий' : errorText);
      setIsBlocked(false);
    }
  };

  const focusHandler = () => {
    setError('');
  };

  return { error, isBlocked, authHandler, focusHandler };
};

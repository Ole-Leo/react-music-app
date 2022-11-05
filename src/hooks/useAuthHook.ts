import { AuthData } from '../models/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthHook = (
  authUser: Function,
  isSuccess: boolean,
  isValid: boolean,
  reset: Function,
  errorText: string
) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);

  const authHandler = async (data: AuthData) => {
    setIsBlocked(true);
    setError('');
    try {
      if (isValid) {
        await authUser({
          username: data.email,
          email: data.email,
          password: data.password,
        }).unwrap();
        reset();
      }
    } catch (error: any) {
      setError(errorText);
      setIsBlocked(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/tracks');
    }
  }, [isSuccess, navigate]);

  const focusHandler = () => {
    setError('');
  };

  return { error, isBlocked, authHandler, focusHandler };
};

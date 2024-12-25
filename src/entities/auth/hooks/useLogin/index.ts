import { Storage } from '@shared/constants';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();

  const login = (token: string) => {
    localStorage.setItem(Storage.ACCESS_TOKEN, token);
    navigate('/connections');
  };

  return login;
};

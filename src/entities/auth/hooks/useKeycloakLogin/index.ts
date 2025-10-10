import { Storage } from '@shared/constants';
import { useNavigate } from 'react-router-dom';

export const useKeycloakLogin = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem(Storage.IS_KEYCLOAK_AUTH, 'true');
    navigate('/connections');
  };

  return login;
};

import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.clear();
    queryClient.clear();
    navigate('/login');
  };

  return logout;
};

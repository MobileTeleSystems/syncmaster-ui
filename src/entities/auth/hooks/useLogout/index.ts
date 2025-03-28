import { Language, LANGUAGE_LOCAL_STORAGE_KEY } from '@shared/config';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logout = () => {
    const language = localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) || Language.EN;
    localStorage.clear();
    localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, language);
    queryClient.clear();
    navigate('/login');
  };

  return logout;
};

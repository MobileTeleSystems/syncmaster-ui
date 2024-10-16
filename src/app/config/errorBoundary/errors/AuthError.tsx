import { useEffect } from 'react';
import { useLogout } from '@entities/auth';

import { useErrorBoundaryContext } from '../hooks';

export const AuthError = () => {
  const logout = useLogout();
  const { resetErrorBoundary } = useErrorBoundaryContext();

  useEffect(() => {
    resetErrorBoundary();
    logout();
  }, [logout, resetErrorBoundary]);

  return null;
};

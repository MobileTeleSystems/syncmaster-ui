import { memo, useEffect } from 'react';
import { useLogout } from '@entities/auth';

import { useErrorBoundaryContext } from '../hooks';

export const AuthError = memo(() => {
  const logout = useLogout();
  const { resetErrorBoundary } = useErrorBoundaryContext();

  useEffect(() => {
    resetErrorBoundary();
    logout();
  }, [logout, resetErrorBoundary]);

  return null;
});

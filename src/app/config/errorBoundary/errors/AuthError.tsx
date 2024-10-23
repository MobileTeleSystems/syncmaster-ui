import { useEffect } from 'react';
import { useLogout } from '@entities/auth';
import { useSelectedGroup } from '@entities/group';

import { useErrorBoundaryContext } from '../hooks';

export const AuthError = () => {
  const logout = useLogout();
  const { cleanGroup } = useSelectedGroup();
  const { resetErrorBoundary } = useErrorBoundaryContext();

  useEffect(() => {
    resetErrorBoundary();
    cleanGroup();
    logout();
  }, [logout, cleanGroup, resetErrorBoundary]);

  return null;
};

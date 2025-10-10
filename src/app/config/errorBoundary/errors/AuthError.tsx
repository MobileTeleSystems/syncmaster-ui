import React, { useLayoutEffect } from 'react';
import { useLogout } from '@entities/auth';
import { useSelectedGroup } from '@entities/group';
import { SpinOverlay } from '@shared/ui';

import { useErrorBoundaryContext } from '../hooks';

export const AuthError = () => {
  const logout = useLogout();
  const { cleanGroup } = useSelectedGroup();
  const { resetErrorBoundary } = useErrorBoundaryContext();

  useLayoutEffect(() => {
    resetErrorBoundary();
    cleanGroup();
    logout();
  }, [logout, cleanGroup, resetErrorBoundary]);

  return <SpinOverlay />;
};

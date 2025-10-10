import React, { useEffect } from 'react';
import { useKeycloakLogout } from '@entities/auth';
import { SpinOverlay } from '@shared/ui';

import { AuthError } from './AuthError';

export const KeycloakAuthError = () => {
  const { mutate: logout, isSuccess } = useKeycloakLogout();

  useEffect(() => {
    logout(null);
  }, [logout]);

  if (!isSuccess) {
    return <SpinOverlay />;
  }

  return <AuthError />;
};

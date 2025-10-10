import { KeycloakLogin, Login } from '@features/auth';
import { AUTH_PROVIDER, AuthProviderType } from '@shared/constants';
import React from 'react';

export const LoginPage = () => {
  if (AUTH_PROVIDER === AuthProviderType.DUMMY) {
    return <Login />;
  }

  return <KeycloakLogin />;
};

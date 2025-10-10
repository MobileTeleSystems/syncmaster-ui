import { useKeycloakCallback, useKeycloakLogin } from '@entities/auth';
import { useLayoutEffect } from 'react';

import { KeycloakCallbackProps } from './types';

export const KeycloakCallback = (props: KeycloakCallbackProps) => {
  useKeycloakCallback(props);
  const login = useKeycloakLogin();

  useLayoutEffect(login, [login]);

  return null;
};

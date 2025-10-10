import { AxiosError } from 'axios';
import { AUTH_PROVIDER, AuthProviderType } from '@shared/constants';

import { KeycloakUnauthorizedRedirectError } from '../../types';
import { ErrorStatusCode } from '../../constants';

export const checkIsKeycloakUnauthorizedRedirectError = (
  error: unknown,
): error is AxiosError<KeycloakUnauthorizedRedirectError> => {
  if (AUTH_PROVIDER !== AuthProviderType.KEYCLOAK) {
    return false;
  }

  const keycloakUnauthorizedError = error as AxiosError<KeycloakUnauthorizedRedirectError>;

  if (keycloakUnauthorizedError.response?.status !== ErrorStatusCode.AUTH) {
    return false;
  }

  if (keycloakUnauthorizedError.response?.data?.error.code !== 'unauthorized') {
    return false;
  }

  return !!keycloakUnauthorizedError.response?.data.error.details;
};

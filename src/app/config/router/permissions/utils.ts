import { AUTH_PROVIDER, AuthProviderType, Storage } from '@shared/constants';

export const isAuthenticated = () => {
  if (AUTH_PROVIDER === AuthProviderType.DUMMY) {
    return !!localStorage.getItem(Storage.ACCESS_TOKEN);
  }

  return !!localStorage.getItem(Storage.IS_KEYCLOAK_AUTH);
};

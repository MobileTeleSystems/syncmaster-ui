export const AuthProviderType = {
  DUMMY: 'dummyAuthProvider',
  KEYCLOAK: 'keycloakAuthProvider',
};

export const AUTH_PROVIDER = window.env?.AUTH_PROVIDER || process.env.AUTH_PROVIDER || AuthProviderType.DUMMY;

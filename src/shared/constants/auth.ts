/** Types of auth providers for users' authentication */
export const AuthProviderType = {
  /** Default auth provider */
  DUMMY: 'dummyAuthProvider',
  /** Keycloak auth provider */
  KEYCLOAK: 'keycloakAuthProvider',
};

export const AUTH_PROVIDER = window.env?.AUTH_PROVIDER || process.env.AUTH_PROVIDER || AuthProviderType.DUMMY;

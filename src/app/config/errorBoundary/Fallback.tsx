import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { ErrorLayout } from '@app/layouts';
import { ErrorStatusCode } from '@shared/config';
import { AUTH_PROVIDER, AuthProviderType } from '@shared/constants';

import { AccessError, AuthError, KeycloakAuthError, NotFoundError, ServerError } from './errors';
import { ErrorBoundaryContext } from './constants';

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const renderError = () => {
    if ('status' in error) {
      switch (error.status) {
        case ErrorStatusCode.AUTH:
          if (AUTH_PROVIDER === AuthProviderType.KEYCLOAK) {
            return <KeycloakAuthError />;
          }
          return <AuthError />;
        case ErrorStatusCode.ACCESS:
          return <AccessError />;
        case ErrorStatusCode.NOT_FOUND:
          return <NotFoundError />;
        default:
          return <ServerError />;
      }
    }
    return <ServerError />;
  };

  return (
    <ErrorBoundaryContext.Provider value={{ resetErrorBoundary }}>
      <ErrorLayout>{renderError()}</ErrorLayout>
    </ErrorBoundaryContext.Provider>
  );
};

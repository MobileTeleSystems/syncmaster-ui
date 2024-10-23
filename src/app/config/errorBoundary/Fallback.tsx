import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { ErrorLayout } from '@app/layouts';
import { Error } from '@shared/config';

import { AccessError, AuthError, NotFoundError, ServerError } from './errors';
import { ErrorBoundaryContext } from './constants';

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const renderError = () => {
    if ('status' in error) {
      switch (error.status) {
        case Error.AUTH:
          return <AuthError />;
        case Error.ACCESS:
          return <AccessError />;
        case Error.NOT_FOUND:
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

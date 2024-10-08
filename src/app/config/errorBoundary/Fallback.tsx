import axios from 'axios';
import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { ErrorLayout } from '@app/layouts';
import { Error } from '@shared/constants';

import { AuthError, NotFoundError, ServerError } from './errors';
import { ErrorBoundaryContext } from './constants';

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const renderError = () => {
    if (!axios.isAxiosError(error)) {
      return <ServerError />;
    }
    switch (error.status) {
      case Error.AUTH:
        return <AuthError />;
      case Error.ACCESS:
      case Error.NOT_FOUND:
        return <NotFoundError />;
      default:
        return <ServerError />;
    }
  };

  return (
    <ErrorBoundaryContext.Provider value={{ resetErrorBoundary }}>
      <ErrorLayout>{renderError()}</ErrorLayout>
    </ErrorBoundaryContext.Provider>
  );
};

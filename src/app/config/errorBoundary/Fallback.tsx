import axios from 'axios';
import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { ErrorLayout } from '@app/layouts';

import { NotFoundError, ServerError } from './errors';
import { ErrorBoundaryContext } from './constants';

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const renderError = () => {
    if (!axios.isAxiosError(error)) {
      return <ServerError />;
    }
    switch (error.status) {
      case 401:
        //TODO: [DOP-19627] Need to add sign out logic in task [DOP-20245]
        return 'User is unauthorized';
      case 403:
      case 404:
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

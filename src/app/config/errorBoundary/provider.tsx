import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { Fallback } from './Fallback';

export const ErrorBoundary = () => {
  const handleError = (error: Error) => {
    console.error(error);
  };

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ReactErrorBoundary onError={handleError} onReset={reset} fallbackRender={Fallback}>
          <Outlet />
        </ReactErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

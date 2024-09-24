import React, { memo, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from './utils';

export const PrivateRoute = memo(({ children }: PropsWithChildren) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
});

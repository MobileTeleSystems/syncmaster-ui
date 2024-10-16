import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from './utils';

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

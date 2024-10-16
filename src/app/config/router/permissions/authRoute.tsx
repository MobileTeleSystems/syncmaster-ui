import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from './utils';

export const AuthRoute = ({ children }: PropsWithChildren) => {
  return isAuthenticated() ? <Navigate to="/users" /> : children;
};

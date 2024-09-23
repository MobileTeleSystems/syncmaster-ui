import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from './utils';

export const AuthRoutes: FC<PropsWithChildren> = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/users" /> : children;
};

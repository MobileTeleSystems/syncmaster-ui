import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from './utils';

export const PrivateRoutes: FC<PropsWithChildren> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

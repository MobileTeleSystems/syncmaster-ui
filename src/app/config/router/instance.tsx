import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { UserListPage } from '@pages/user';
import { LoginPage } from '@pages/auth';

import { AuthRoute, PrivateRoute } from './permissions';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <AuthRoute>
        <LoginPage />
      </AuthRoute>
    ),
  },
  {
    path: '/users',
    element: (
      <PrivateRoute>
        <UserListPage />
      </PrivateRoute>
    ),
  },
]);

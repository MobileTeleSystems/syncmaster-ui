import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { UserListPage } from '@pages/user';
import { LoginPage } from '@pages/auth';
import { AuthLayout, ErrorLayout, PrivateLayout } from '@app/layouts';
import { GroupListPage } from '@pages/groups';
import { AuthProvider } from '@entities/auth';

import { ErrorBoundary, NotFoundError } from '../errorBoundary';

import { AuthRoute, PrivateRoute } from './permissions';

export const router = createBrowserRouter([
  {
    element: <ErrorBoundary />,
    children: [
      {
        element: (
          <AuthRoute>
            <AuthLayout />
          </AuthRoute>
        ),
        children: [
          {
            path: '/login',
            element: <LoginPage />,
          },
        ],
      },
      {
        element: (
          <PrivateRoute>
            <AuthProvider>
              <PrivateLayout />
            </AuthProvider>
          </PrivateRoute>
        ),
        children: [
          {
            path: '/users',
            element: <UserListPage />,
          },
          {
            path: '/groups',
            element: <GroupListPage />,
          },
        ],
      },
      {
        path: '*',
        element: (
          <ErrorLayout>
            <NotFoundError />
          </ErrorLayout>
        ),
      },
    ],
  },
]);

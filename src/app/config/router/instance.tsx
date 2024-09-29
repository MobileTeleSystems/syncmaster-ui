import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { UserListPage } from '@pages/user';
import { LoginPage } from '@pages/auth';
import { AuthLayout, ErrorLayout, PrivateLayout } from '@app/layouts';
import { GroupListPage } from '@pages/groups';

import { ErrorBoundary, NotFoundError } from '../errorBoundary';

import { AuthRoute, PrivateRoute } from './permissions';

export const router = createBrowserRouter([
  {
    element: <ErrorBoundary />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: '/login',
            element: (
              <AuthRoute>
                <LoginPage />
              </AuthRoute>
            ),
          },
        ],
      },
      {
        element: <PrivateLayout />,
        children: [
          {
            path: '/users',
            element: (
              <PrivateRoute>
                <UserListPage />
              </PrivateRoute>
            ),
          },
          {
            path: '/groups',
            element: (
              <PrivateRoute>
                <GroupListPage />
              </PrivateRoute>
            ),
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

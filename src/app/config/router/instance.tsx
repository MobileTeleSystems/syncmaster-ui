import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { UserDetailPage, UserListPage } from '@pages/user';
import { LoginPage } from '@pages/auth';
import { AuthLayout, ErrorLayout, PrivateLayout } from '@app/layouts';
import { CreateGroupPage, GroupDetailPage, GroupListPage, UpdateGroupPage } from '@pages/group';
import { AuthProvider } from '@entities/auth';
import { QueueDetailPage, QueueListPage } from '@pages/queue';

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
            path: '/users/:id',
            element: <UserDetailPage />,
          },
          {
            path: '/groups',
            element: <GroupListPage />,
          },
          {
            path: '/groups/:id',
            element: <GroupDetailPage />,
          },
          {
            path: '/groups/create',
            element: <CreateGroupPage />,
          },
          {
            path: '/groups/:id/update',
            element: <UpdateGroupPage />,
          },
          {
            path: '/queues',
            element: <QueueListPage />,
          },
          {
            path: '/queues/:id',
            element: <QueueDetailPage />,
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

import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { KeycloakCallbackPage, LoginPage } from '@pages/auth';
import { AuthLayout, ErrorLayout, PrivateLayout } from '@app/layouts';
import { CreateGroupPage, GroupDetailPage, GroupListPage, UpdateGroupPage } from '@pages/group';
import { AuthProvider } from '@entities/auth';
import { CreateQueuePage, QueueDetailPage, QueueListPage, UpdateQueuePage } from '@pages/queue';
import {
  ConnectionDetailPage,
  ConnectionListPage,
  CreateConnectionPage,
  UpdateConnectionPage,
} from '@pages/connection';
import { CreateTransferPage, TransferDetailPage, TransferListPage, UpdateTransferPage } from '@pages/transfer';
import { RunDetailPage } from '@pages/run';

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
          {
            path: '/auth/callback',
            element: <KeycloakCallbackPage />,
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
            path: '/',
            element: <Navigate to="/connections" replace />,
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
          {
            path: '/queues/create',
            element: <CreateQueuePage />,
          },
          {
            path: '/queues/:id/update',
            element: <UpdateQueuePage />,
          },
          {
            path: '/connections',
            element: <ConnectionListPage />,
          },
          {
            path: '/connections/:id',
            element: <ConnectionDetailPage />,
          },
          {
            path: '/connections/create',
            element: <CreateConnectionPage />,
          },
          {
            path: '/connections/:id/update',
            element: <UpdateConnectionPage />,
          },
          {
            path: '/transfers',
            element: <TransferListPage />,
          },
          {
            path: '/transfers/:id',
            element: <TransferDetailPage />,
          },
          {
            path: '/transfers/create',
            element: <CreateTransferPage />,
          },
          {
            path: '/transfers/:id/update',
            element: <UpdateTransferPage />,
          },
          {
            path: '/transfers/runs/:id',
            element: <RunDetailPage />,
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

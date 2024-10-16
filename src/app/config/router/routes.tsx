import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './instance';

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

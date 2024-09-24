import React, { memo } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './instance';

export const AppRoutes = memo(() => {
  return <RouterProvider router={router} />;
});

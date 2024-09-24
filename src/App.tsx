import { AppRoutes } from '@app/config';
import { TanstackQueryProvider } from '@shared/config';
import React from 'react';

export const App = () => (
  <TanstackQueryProvider>
    <AppRoutes />
  </TanstackQueryProvider>
);

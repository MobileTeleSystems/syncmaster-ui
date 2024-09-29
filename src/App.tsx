import { AppRoutes, TanstackQueryProvider } from '@app/config';
import React from 'react';

export const App = () => (
  <TanstackQueryProvider>
    <AppRoutes />
  </TanstackQueryProvider>
);

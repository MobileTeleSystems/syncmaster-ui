import { AntdConfigProvider, AppRoutes } from '@app/config';
import { TanstackQueryProvider } from '@shared/config';
import React from 'react';

export const App = () => (
  <TanstackQueryProvider>
    <AntdConfigProvider>
      <AppRoutes />
    </AntdConfigProvider>
  </TanstackQueryProvider>
);

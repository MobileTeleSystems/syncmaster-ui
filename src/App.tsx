import { AppRoutes } from '@app/config';
import { TanstackQueryProvider } from '@shared/config';
import React, { FC } from 'react';

export const App: FC = () => (
  <TanstackQueryProvider>
    <AppRoutes />
  </TanstackQueryProvider>
);

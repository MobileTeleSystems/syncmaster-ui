import { AntdConfigProvider, AppRoutes } from '@app/config';
import { SelectedGroupProvider } from '@entities/group';
import { TanstackQueryProvider } from '@shared/config';
import React from 'react';

export const App = () => (
  <TanstackQueryProvider>
    <AntdConfigProvider>
      <SelectedGroupProvider>
        <AppRoutes />
      </SelectedGroupProvider>
    </AntdConfigProvider>
  </TanstackQueryProvider>
);

import { TanstackQueryProvider } from '@shared/config';
import React, { FC } from 'react';

export const App: FC = () => (
  <TanstackQueryProvider>
    <main>Hello</main>
  </TanstackQueryProvider>
);

import React, { PropsWithChildren } from 'react';

import { SpinOverlay } from '../SpinOverlay';

export const Suspense = ({ children }: PropsWithChildren) => {
  return <React.Suspense fallback={<SpinOverlay />}>{children}</React.Suspense>;
};

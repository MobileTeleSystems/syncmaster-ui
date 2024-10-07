import React, { memo, PropsWithChildren } from 'react';
import { SpinOverlay } from '@shared/ui';

import { useCurrentUserInfo } from '../../api';
import { AuthContext } from '../../constants';

export const AuthProvider = memo(({ children }: PropsWithChildren) => {
  const { data, isLoading } = useCurrentUserInfo();

  if (isLoading || !data) {
    return <SpinOverlay />;
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
});

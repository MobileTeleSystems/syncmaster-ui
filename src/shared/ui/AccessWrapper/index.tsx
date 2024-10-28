import { memo, PropsWithChildren } from 'react';
import { hasAccessByUserRole } from '@shared/utils';

import { AccessWrapperProps } from './types';

export const AccessWrapper = memo(({ accessRole, currentRole, children }: PropsWithChildren<AccessWrapperProps>) => {
  if (!hasAccessByUserRole(accessRole, currentRole)) {
    return null;
  }

  return children;
});

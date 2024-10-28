import React from 'react';
import { PageContentWrapper } from '@shared/ui';
import { ConnectionDetailInfo } from '@features/connection';

import { ConnectionDetailProps } from './types';

export const ConnectionDetail = ({ connection, group }: ConnectionDetailProps) => {
  return (
    <PageContentWrapper>
      {/* //TODO: [DOP-20043] add update and delete actions for connection */}
      <ConnectionDetailInfo connection={connection} group={group.data} />
    </PageContentWrapper>
  );
};

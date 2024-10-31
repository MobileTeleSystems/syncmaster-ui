import React from 'react';
import { PageContentWrapper } from '@shared/ui';
import { TransferDetailInfo } from '@features/transfer';

import { TransferDetailProps } from './types';

export const TransferDetail = ({ transfer, group, connectionSource, connectionTarget, queue }: TransferDetailProps) => {
  return (
    <PageContentWrapper>
      {/* //TODO: [DOP-20065] add update and delete actions for transfer */}
      <TransferDetailInfo
        transfer={transfer}
        group={group.data}
        connectionSource={connectionSource}
        connectionTarget={connectionTarget}
        queue={queue}
      />
    </PageContentWrapper>
  );
};

import React from 'react';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { TransferDetailInfo } from '@features/transfer';
import { UserRole } from '@shared/types';

import { TransferDetailProps } from './types';
import { DeleteTransferButton, UpdateTransferButton } from './components';
import classes from './styles.module.less';

export const TransferDetail = ({ transfer, group, connectionSource, connectionTarget, queue }: TransferDetailProps) => {
  return (
    <PageContentWrapper>
      <TransferDetailInfo
        transfer={transfer}
        group={group.data}
        connectionSource={connectionSource}
        connectionTarget={connectionTarget}
        queue={queue}
        extra={
          <AccessWrapper accessRole={UserRole.Maintainer} currentRole={group.role}>
            <div className={classes.actions}>
              <UpdateTransferButton transferId={transfer.id} />
              <DeleteTransferButton transfer={transfer} />
            </div>
          </AccessWrapper>
        }
      />
    </PageContentWrapper>
  );
};

import React from 'react';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { TransferDetailInfo, TransferConnectionsCanvas } from '@features/transfer';
import { UserRole } from '@shared/types';
import { Form } from 'antd';
import { prepareTransformationForm } from '@entities/transformation';
import { Typography } from 'antd';

import { TransferDetailProps } from './types';
import { DeleteTransferButton, UpdateTransferButton } from './components';
import classes from './styles.module.less';

const { Text } = Typography;

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
      >
        <div className={classes.advanced}>
          <Text className={classes.subtitle} strong>
            Transfer advanced info
          </Text>
          <Form
            className={classes.form}
            layout="vertical"
            requiredMark={false}
            initialValues={{
              ...transfer,
              transformations: prepareTransformationForm(transfer.transformations),
            }}
            disabled
          >
            <TransferConnectionsCanvas groupId={group.data.id} isDisplayedButtons={false} />
          </Form>
        </div>
      </TransferDetailInfo>
    </PageContentWrapper>
  );
};

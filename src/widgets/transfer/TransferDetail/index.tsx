import React from 'react';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { TransferDetailInfo, TransferConnectionsCanvas } from '@features/transfer';
import { UserRole } from '@shared/types';
import { Form } from 'antd';
import { prepareTransformationForm } from '@entities/transformation';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { TransferDetailProps } from './types';
import { DeleteTransferButton, UpdateTransferButton } from './components';
import * as classes from './styles.module.less';

const { Text } = Typography;

export const TransferDetail = ({ transfer, group, connectionSource, connectionTarget, queue }: TransferDetailProps) => {
  const { t } = useTranslation('transfer');

  return (
    <PageContentWrapper>
      <TransferDetailInfo
        transfer={transfer}
        group={group.data}
        connectionSource={connectionSource}
        connectionTarget={connectionTarget}
        queue={queue}
        extra={
          <div className={classes.actions}>
            <AccessWrapper accessRole={UserRole.DEVELOPER} currentRole={group.role}>
              <UpdateTransferButton transferId={transfer.id} />
            </AccessWrapper>
            <AccessWrapper accessRole={UserRole.MAINTAINER} currentRole={group.role}>
              <DeleteTransferButton transfer={transfer} />
            </AccessWrapper>
          </div>
        }
      >
        <div className={classes.advanced}>
          <Text className={classes.subtitle} strong>
            {t('transferAdvancedInfo')}
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

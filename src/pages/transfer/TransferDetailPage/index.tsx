import React from 'react';
import { PageDetailParams } from '@shared/types';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetGroup } from '@entities/group';
import { useGetTransfer } from '@entities/transfer';
import { TransferDetail } from '@widgets/transfer';
import { useGetConnection } from '@entities/connection';
import { useGetQueue } from '@entities/queue';

const { Title } = Typography;

export const TransferDetailPage = () => {
  const params = useParams<PageDetailParams>();
  const { data: transfer } = useGetTransfer({ id: Number(params.id) });
  const { data: group } = useGetGroup({ id: transfer.group_id });
  const { data: connectionSource } = useGetConnection({ id: transfer.source_connection_id });
  const { data: connectionTarget } = useGetConnection({ id: transfer.target_connection_id });
  const { data: queue } = useGetQueue({ id: transfer.queue_id });

  if (!transfer || !group || !connectionSource || !connectionTarget || !queue) {
    return null;
  }

  return (
    <PageContentWrapper>
      <Title>{transfer.name}</Title>
      <TransferDetail
        transfer={transfer}
        group={group}
        connectionSource={connectionSource}
        connectionTarget={connectionTarget}
        queue={queue}
      />
    </PageContentWrapper>
  );
};

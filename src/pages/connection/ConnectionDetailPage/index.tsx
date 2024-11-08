import React from 'react';
import { PageDetailParams } from '@shared/types';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetGroup } from '@entities/group';
import { useGetConnection } from '@entities/connection';
import { ConnectionDetail } from '@widgets/connection';

const { Title } = Typography;

export const ConnectionDetailPage = () => {
  const params = useParams<PageDetailParams>();
  const { data: connection } = useGetConnection({ id: Number(params.id) });
  const { data: group } = useGetGroup({ id: connection.group_id });

  if (!connection || !group) {
    return null;
  }

  return (
    <PageContentWrapper>
      <Title>Connection: {connection.name}</Title>
      <ConnectionDetail connection={connection} group={group} />
    </PageContentWrapper>
  );
};

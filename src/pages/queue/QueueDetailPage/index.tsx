import React from 'react';
import { PageDetailParams } from '@shared/types';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetQueue } from '@entities/queue';
import { useGetGroup } from '@entities/group';
import { QueueDetail } from '@widgets/queue';

const { Title } = Typography;

export const QueueDetailPage = () => {
  const params = useParams<PageDetailParams>();
  const { data: queue } = useGetQueue({ id: Number(params.id) });
  const { data: group } = useGetGroup({ id: queue.group_id });

  if (!queue || !group) {
    return null;
  }

  return (
    <PageContentWrapper>
      <Title>Queue: {queue.name}</Title>
      <QueueDetail queue={queue} group={group} />
    </PageContentWrapper>
  );
};

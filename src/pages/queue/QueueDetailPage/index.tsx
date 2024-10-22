import React from 'react';
import { PageDetailParams } from '@shared/types';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetQueue } from '@entities/queue';
import { QueueDetailInfo } from '@features/queue';
import { useGetGroup } from '@entities/group';

const { Title } = Typography;

export const QueueDetailPage = () => {
  const params = useParams<PageDetailParams>();
  const { data: queue } = useGetQueue({ id: params.id! });
  const { data: group } = useGetGroup({ id: queue.group_id });

  if (!queue || !group) {
    return null;
  }

  return (
    <PageContentWrapper>
      <Title>{queue.name}</Title>
      <QueueDetailInfo queue={queue} group={group} />
    </PageContentWrapper>
  );
};

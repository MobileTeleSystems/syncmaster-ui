import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { useParams } from 'react-router-dom';
import { PageDetailParams } from '@shared/types';
import { useGetQueue } from '@entities/queue';
import { UpdateQueue } from '@features/queue';
import { useGetGroup } from '@entities/group';

const { Title } = Typography;

export const UpdateQueuePage = () => {
  const params = useParams<PageDetailParams>();
  const { data: queue } = useGetQueue({ id: Number(params.id) });
  const { data: group } = useGetGroup({ id: queue.group_id });

  if (!queue || !group) {
    return null;
  }

  return (
    <PageContentWrapper width="small">
      <Title>Update Queue</Title>
      <UpdateQueue queue={queue} group={group} />
    </PageContentWrapper>
  );
};

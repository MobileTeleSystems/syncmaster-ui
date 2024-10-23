import { QueueList } from '@features/queue';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

export const QueueListPage = () => {
  return (
    <PageContentWrapper width="large">
      <Title>Queues</Title>
      <QueueList />
    </PageContentWrapper>
  );
};

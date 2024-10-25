import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { EmptyGroupAlert, useSelectedGroup } from '@entities/group';
import { CreateQueue } from '@features/queue';

const { Title } = Typography;

export const CreateQueuePage = () => {
  const { group } = useSelectedGroup();

  const renderContent = () => {
    if (!group?.data.id) {
      return <EmptyGroupAlert description="You need to select a group to create a queue" />;
    }
    return <CreateQueue group={group.data} />;
  };

  return (
    <PageContentWrapper width="small">
      <Title>Create Queue</Title>
      {renderContent()}
    </PageContentWrapper>
  );
};

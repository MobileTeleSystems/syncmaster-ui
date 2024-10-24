import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { CreateQueue } from '@features/queue';
import { hasAccessByUserRole } from '@shared/utils';
import { UserRole } from '@shared/types';

const { Title } = Typography;

export const CreateQueuePage = () => {
  const { group } = useSelectedGroup();

  const renderContent = () => {
    if (!group?.data.id) {
      return <GroupWarningAlert description="You need to select a group to create a queue" />;
    }
    if (!hasAccessByUserRole(UserRole.Maintainer, group.role)) {
      return <GroupWarningAlert description="You don't have permission to create a queue in selected group" />;
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

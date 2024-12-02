import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { hasAccessByUserRole } from '@shared/utils';
import { UserRole } from '@shared/types';
import { CreateConnection } from '@features/connection';

const { Title } = Typography;

export const CreateConnectionPage = () => {
  const { group } = useSelectedGroup();

  const renderContent = () => {
    if (!group?.data.id) {
      return <GroupWarningAlert description="You need to select a group to create a connection" />;
    }
    if (!hasAccessByUserRole(UserRole.Maintainer, group.role)) {
      return <GroupWarningAlert description="You don't have permission to create a connection in selected group" />;
    }
    return <CreateConnection group={group.data} />;
  };

  return (
    <PageContentWrapper width="small">
      <Title>Create Connection</Title>
      {renderContent()}
    </PageContentWrapper>
  );
};

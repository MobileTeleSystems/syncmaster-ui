import React from 'react';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { ConnectionListWrapper } from '@widgets/connection';

const { Title } = Typography;

export const ConnectionListPage = () => {
  const { group } = useSelectedGroup();

  const renderContent = () => {
    if (!group?.data.id) {
      return <GroupWarningAlert description="You need to select a group to see connection list" />;
    }

    return (
      <PageContentWrapper width="large">
        <ConnectionListWrapper group={group} />
      </PageContentWrapper>
    );
  };

  return (
    <PageContentWrapper width="large">
      <Title>Connections</Title>
      {renderContent()}
    </PageContentWrapper>
  );
};

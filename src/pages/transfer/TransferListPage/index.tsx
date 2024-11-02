import React from 'react';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { TransferListWrapper } from '@widgets/transfer';

const { Title } = Typography;

export const TransferListPage = () => {
  const { group } = useSelectedGroup();

  const renderContent = () => {
    if (!group?.data.id) {
      return <GroupWarningAlert description="You need to select a group to see transfer list" />;
    }

    return (
      <PageContentWrapper width="large">
        <TransferListWrapper group={group} />
      </PageContentWrapper>
    );
  };

  return (
    <PageContentWrapper width="large">
      <Title>Transfers</Title>
      {renderContent()}
    </PageContentWrapper>
  );
};

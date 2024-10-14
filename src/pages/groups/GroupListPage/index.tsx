import { GroupList } from '@features/group';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import React, { memo } from 'react';

const { Title } = Typography;

export const GroupListPage = memo(() => {
  return (
    <PageContentWrapper>
      <Title>Groups</Title>
      <GroupList />
    </PageContentWrapper>
  );
});

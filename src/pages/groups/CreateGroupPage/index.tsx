import React, { memo } from 'react';
import { Typography } from 'antd';
import { CreateGroup } from '@features/group';
import { PageContentWrapper } from '@shared/ui';

const { Title } = Typography;

export const CreateGroupPage = memo(() => {
  return (
    <PageContentWrapper width="small">
      <Title>Create Group</Title>
      <CreateGroup />
    </PageContentWrapper>
  );
});

import { UserList } from '@features/user';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import React, { memo } from 'react';

const { Title } = Typography;

export const UserListPage = memo(() => {
  return (
    <PageContentWrapper>
      <Title>Users</Title>
      <UserList />
    </PageContentWrapper>
  );
});

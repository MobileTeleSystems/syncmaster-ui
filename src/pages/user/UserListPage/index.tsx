import { UserList } from '@features/user';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

export const UserListPage = () => {
  return (
    <PageContentWrapper width="large">
      <Title>Users</Title>
      <UserList />
    </PageContentWrapper>
  );
};

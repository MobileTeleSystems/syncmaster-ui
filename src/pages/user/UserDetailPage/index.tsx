import React, { memo } from 'react';
import { UserDetailInfo, useUser } from '@entities/user';
import { PageDetailParams } from '@shared/types';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';

const { Title } = Typography;

export const UserDetailPage = memo(() => {
  const params = useParams<PageDetailParams>();
  const { data: user } = useUser({ id: params.id! });

  if (!user) {
    return null;
  }

  return (
    <PageContentWrapper>
      <Title>{user.username}</Title>
      <UserDetailInfo id={user.id} username={user.username} is_superuser={user.is_superuser} />
    </PageContentWrapper>
  );
});

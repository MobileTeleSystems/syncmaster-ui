import React from 'react';
import { UserDetailInfo, useGetUser } from '@entities/user';
import { PageDetailParams } from '@shared/types';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';

const { Title } = Typography;

export const UserDetailPage = () => {
  const params = useParams<PageDetailParams>();
  const { data: user } = useGetUser({ id: params.id! });

  if (!user) {
    return null;
  }

  return (
    <PageContentWrapper>
      <Title>{user.username}</Title>
      <UserDetailInfo user={user} />
    </PageContentWrapper>
  );
};

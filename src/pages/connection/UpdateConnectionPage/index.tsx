import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { useParams } from 'react-router-dom';
import { PageDetailParams, UserRole } from '@shared/types';
import { useGetGroup } from '@entities/group';
import { hasAccessByUserRole } from '@shared/utils';
import { AccessError } from '@shared/config';
import { useGetConnection } from '@entities/connection';
import { UpdateConnection } from '@features/connection';

const { Title } = Typography;

export const UpdateConnectionPage = () => {
  const params = useParams<PageDetailParams>();
  const { data: connection } = useGetConnection({ id: Number(params.id) });
  const { data: group } = useGetGroup({ id: connection.group_id });

  if (!hasAccessByUserRole(UserRole.Maintainer, group.role)) {
    throw new AccessError();
  }

  return (
    <PageContentWrapper gap="large">
      <Title>Update Connection</Title>
      <UpdateConnection connection={connection} group={group.data} />
    </PageContentWrapper>
  );
};

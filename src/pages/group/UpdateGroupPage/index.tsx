import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { useParams } from 'react-router-dom';
import { PageDetailParams, UserRole } from '@shared/types';
import { useGetGroup } from '@entities/group';
import { UpdateGroup } from '@features/group';
import { hasAccessByUserRole } from '@shared/utils';
import { AccessError } from '@shared/config';

const { Title } = Typography;

export const UpdateGroupPage = () => {
  const params = useParams<PageDetailParams>();
  const { data: group } = useGetGroup({ id: Number(params.id) });

  if (!group) {
    return null;
  }

  if (!hasAccessByUserRole(UserRole.Owner, group.role)) {
    throw new AccessError();
  }

  return (
    <PageContentWrapper width="small">
      <Title>Update Group</Title>
      <UpdateGroup group={group.data} />
    </PageContentWrapper>
  );
};

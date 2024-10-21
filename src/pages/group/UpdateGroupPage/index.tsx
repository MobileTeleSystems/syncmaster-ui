import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { useParams } from 'react-router-dom';
import { PageDetailParams } from '@shared/types';
import { useGetGroup } from '@entities/group';
import { UpdateGroup } from '@features/group';

const { Title } = Typography;

export const UpdateGroupPage = () => {
  const params = useParams<PageDetailParams>();
  const { data: group } = useGetGroup({ id: params.id! });

  if (!group) {
    return null;
  }

  return (
    <PageContentWrapper width="small">
      <Title>Update Group</Title>
      <UpdateGroup group={group} />
    </PageContentWrapper>
  );
};

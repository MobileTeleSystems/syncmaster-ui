import React, { memo } from 'react';
import { PageDetailParams } from '@shared/types';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { GroupDetailInfo, useGetGroup } from '@entities/group';
import { useGetUser } from '@entities/user';

const { Title } = Typography;

export const GroupDetailPage = memo(() => {
  const params = useParams<PageDetailParams>();
  const { data: group } = useGetGroup({ id: params.id! });
  const { data: owner } = useGetUser({ id: group.owner_id });

  if (!group || !owner) {
    return null;
  }

  return (
    <PageContentWrapper>
      <Title>{group.name}</Title>
      <GroupDetailInfo group={group} owner={owner} />
    </PageContentWrapper>
  );
});

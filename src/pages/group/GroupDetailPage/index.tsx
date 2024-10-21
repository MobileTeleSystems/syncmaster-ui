import React from 'react';
import { PageDetailParams } from '@shared/types';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetGroup } from '@entities/group';
import { useGetUser } from '@entities/user';
import { GroupDetailInfo } from '@features/group';
import { GroupUsers } from '@widgets/group';

import classes from './styles.module.less';
import { UpdateGroupButton } from './components';

const { Title } = Typography;

export const GroupDetailPage = () => {
  const params = useParams<PageDetailParams>();
  const { data: group } = useGetGroup({ id: params.id! });
  const { data: owner } = useGetUser({ id: group.owner_id });

  if (!group || !owner) {
    return null;
  }

  return (
    <div className={classes.root}>
      <PageContentWrapper>
        <Title>{group.name}</Title>
        <GroupDetailInfo
          group={group}
          owner={owner}
          extra={<UpdateGroupButton groupId={group.id} ownerId={owner.id} />}
        />
      </PageContentWrapper>
      <GroupUsers group={group} />
    </div>
  );
};

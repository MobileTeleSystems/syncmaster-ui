import React from 'react';
import { PageDetailParams, UserRole } from '@shared/types';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
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
  const { data: group } = useGetGroup({ id: Number(params.id) });
  const { data: owner } = useGetUser({ id: group.data.owner_id });

  return (
    <div className={classes.root}>
      <PageContentWrapper gap="large">
        <Title>Group: {group.data.name}</Title>
        <GroupDetailInfo
          group={group.data}
          owner={owner}
          extra={
            <AccessWrapper accessRole={UserRole.Owner} currentRole={group.role}>
              <UpdateGroupButton groupId={group.data.id} />
            </AccessWrapper>
          }
        />
      </PageContentWrapper>
      <GroupUsers group={group} />
    </div>
  );
};

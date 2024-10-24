import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { Button, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { QueueListWrapper } from '@widgets/queue';
import { UserRole } from '@shared/types';

import classes from './styles.module.less';

const { Title } = Typography;

export const QueueListPage = () => {
  const { group } = useSelectedGroup();

  const renderContent = () => {
    if (!group?.data.id) {
      return <GroupWarningAlert description="You need to select a group to see queue list" />;
    }

    return (
      <PageContentWrapper width="large">
        <AccessWrapper accessRole={UserRole.Maintainer} currentRole={group.role}>
          <Button className={classes.createButton} type="primary" size="large">
            <Link to="/queues/create">Create Queue</Link>
          </Button>
        </AccessWrapper>
        <QueueListWrapper group={group} />
      </PageContentWrapper>
    );
  };

  return (
    <PageContentWrapper width="large">
      <Title>Queues</Title>
      {renderContent()}
    </PageContentWrapper>
  );
};

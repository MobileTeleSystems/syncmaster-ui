import { PageContentWrapper } from '@shared/ui';
import { Button, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { EmptyGroupAlert, useSelectedGroup } from '@entities/group';
import { QueueListWrapper } from '@widgets/queue/QueueListWrapper';

import classes from './styles.module.less';

const { Title } = Typography;

export const QueueListPage = () => {
  const { group } = useSelectedGroup();

  const renderContent = () => {
    if (!group?.data.id) {
      return <EmptyGroupAlert description="You need to select a group to see queue list" />;
    }

    return (
      <PageContentWrapper width="large">
        <Button className={classes.createButton} type="primary" size="large">
          <Link to="/queues/create">Create Queue</Link>
        </Button>
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

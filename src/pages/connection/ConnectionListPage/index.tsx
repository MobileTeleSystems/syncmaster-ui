import React from 'react';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { Button, Typography } from 'antd';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { ConnectionListWrapper } from '@widgets/connection';
import { UserRole } from '@shared/types';
import { Link } from 'react-router-dom';

import classes from './styles.module.less';

const { Title } = Typography;

export const ConnectionListPage = () => {
  const { group } = useSelectedGroup();

  const renderContent = () => {
    if (!group?.data.id) {
      return <GroupWarningAlert description="You need to select a group to see connection list" />;
    }

    return (
      <PageContentWrapper width="large">
        <AccessWrapper accessRole={UserRole.Maintainer} currentRole={group.role}>
          <Button className={classes.createButton} type="primary" size="large">
            <Link to="/connections/create">Create Connection</Link>
          </Button>
        </AccessWrapper>
        <ConnectionListWrapper group={group} />
      </PageContentWrapper>
    );
  };

  return (
    <PageContentWrapper width="large">
      <Title>Connections</Title>
      {renderContent()}
    </PageContentWrapper>
  );
};

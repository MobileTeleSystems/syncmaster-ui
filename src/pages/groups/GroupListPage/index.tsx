import { GroupList } from '@features/group';
import { PageContentWrapper } from '@shared/ui';
import { Button, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import classes from './styles.module.less';

const { Title } = Typography;

export const GroupListPage = () => {
  return (
    <PageContentWrapper width="large">
      <Title>Groups</Title>
      <div className={classes.wrapper}>
        <Button className={classes.createButton} type="primary" size="large">
          <Link to="/groups/create">Create group</Link>
        </Button>
        <GroupList />
      </div>
    </PageContentWrapper>
  );
};

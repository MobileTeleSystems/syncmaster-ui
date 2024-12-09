import React from 'react';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { UserRole } from '@shared/types';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { TransferListWrapper } from '@widgets/transfer';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import classes from './styles.module.less';

export const TransferListPageContent = () => {
  const { group } = useSelectedGroup();

  if (!group?.data.id) {
    return <GroupWarningAlert description="You need to select a group to see transfer list" />;
  }

  return (
    <PageContentWrapper width="large">
      <AccessWrapper accessRole={UserRole.Maintainer} currentRole={group.role}>
        <Button className={classes.createButton} type="primary" size="large">
          <Link to="/transfers/create">Create Transfer</Link>
        </Button>
      </AccessWrapper>
      <TransferListWrapper group={group} />
    </PageContentWrapper>
  );
};

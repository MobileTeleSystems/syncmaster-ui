import React from 'react';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { UserRole } from '@shared/types';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { TransferListWrapper } from '@widgets/transfer';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';

export const TransferListPageContent = () => {
  const { t } = useTranslation('transfer');
  const { group } = useSelectedGroup();

  if (!group?.data.id) {
    return <GroupWarningAlert description={t('needToSelectGroupToSeeTransferList')} />;
  }

  return (
    <PageContentWrapper width="large">
      <AccessWrapper accessRole={UserRole.MAINTAINER} currentRole={group.role}>
        <Button className={classes.createButton} type="primary" size="large">
          <Link to="/transfers/create">{t('createTransfer')}</Link>
        </Button>
      </AccessWrapper>
      <TransferListWrapper group={group} />
    </PageContentWrapper>
  );
};

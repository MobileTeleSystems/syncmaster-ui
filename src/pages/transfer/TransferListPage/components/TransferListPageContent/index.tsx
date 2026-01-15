import React from 'react';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { UserRole } from '@shared/types';
import { AccessWrapper, ActionButton, PageContentWrapper } from '@shared/ui';
import { TransferListWrapper } from '@widgets/transfer';
import { useTranslation } from 'react-i18next';

import * as classes from './styles.module.less';

export const TransferListPageContent = () => {
  const { t } = useTranslation('transfer');
  const { group } = useSelectedGroup();

  if (!group?.data.id) {
    return <GroupWarningAlert description={t('needToSelectGroupToSeeTransferList')} />;
  }

  return (
    <PageContentWrapper width="large">
      <AccessWrapper accessRole={UserRole.MAINTAINER} currentRole={group.role}>
        <ActionButton className={classes.createButton} actionType="create" to="/transfers/create" />
      </AccessWrapper>
      <TransferListWrapper group={group} />
    </PageContentWrapper>
  );
};

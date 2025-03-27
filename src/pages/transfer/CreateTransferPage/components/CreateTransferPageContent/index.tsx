import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { UserRole } from '@shared/types';
import { hasAccessByUserRole } from '@shared/utils';
import { CreateTransfer } from '@widgets/transfer';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const CreateTransferPageContent = () => {
  const { t } = useTranslation('transfer');
  const { group } = useSelectedGroup();

  if (!group?.data.id) {
    return <GroupWarningAlert description={t('needToSelectGroupToCreateTransfer')} />;
  }
  if (!hasAccessByUserRole(UserRole.MAINTAINER, group.role)) {
    return <GroupWarningAlert description={t('notPermissionToCreateTransfer')} />;
  }
  return <CreateTransfer group={group.data} />;
};

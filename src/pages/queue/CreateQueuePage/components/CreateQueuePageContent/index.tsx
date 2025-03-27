import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { CreateQueue } from '@features/queue';
import { UserRole } from '@shared/types';
import { hasAccessByUserRole } from '@shared/utils';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const CreateQueuePageContent = () => {
  const { t } = useTranslation('queue');
  const { group } = useSelectedGroup();

  if (!group?.data.id) {
    return <GroupWarningAlert description={t('needToSelectGroupToCreateQueue')} />;
  }
  if (!hasAccessByUserRole(UserRole.MAINTAINER, group.role)) {
    return <GroupWarningAlert description={t('notPermissionToCreateQueue')} />;
  }
  return <CreateQueue group={group.data} />;
};

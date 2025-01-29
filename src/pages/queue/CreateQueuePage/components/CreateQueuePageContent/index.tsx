import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { CreateQueue } from '@features/queue';
import { UserRole } from '@shared/types';
import { hasAccessByUserRole } from '@shared/utils';
import React from 'react';

export const CreateQueuePageContent = () => {
  const { group } = useSelectedGroup();

  if (!group?.data.id) {
    return <GroupWarningAlert description="You need to select a group to create a queue" />;
  }
  if (!hasAccessByUserRole(UserRole.Maintainer, group.role)) {
    return <GroupWarningAlert description="You don't have permission to create a queue in selected group" />;
  }
  return <CreateQueue group={group.data} />;
};

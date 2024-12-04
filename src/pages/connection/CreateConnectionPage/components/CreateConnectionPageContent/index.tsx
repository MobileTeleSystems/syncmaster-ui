import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { CreateConnection } from '@features/connection';
import { UserRole } from '@shared/types';
import { hasAccessByUserRole } from '@shared/utils';
import React from 'react';

export const CreateConnectionPageContent = () => {
  const { group } = useSelectedGroup();

  if (!group?.data.id) {
    return <GroupWarningAlert description="You need to select a group to create a connection" />;
  }
  if (!hasAccessByUserRole(UserRole.Maintainer, group.role)) {
    return <GroupWarningAlert description="You don't have permission to create a connection in selected group" />;
  }
  return <CreateConnection group={group.data} />;
};

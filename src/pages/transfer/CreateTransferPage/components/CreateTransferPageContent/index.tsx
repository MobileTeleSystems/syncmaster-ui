import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { UserRole } from '@shared/types';
import { hasAccessByUserRole } from '@shared/utils';
import { CreateTransfer } from '@widgets/transfer';
import React from 'react';

export const CreateTransferPageContent = () => {
  const { group } = useSelectedGroup();

  if (!group?.data.id) {
    return <GroupWarningAlert description="You need to select a group to create a transfer" />;
  }
  if (!hasAccessByUserRole(UserRole.Maintainer, group.role)) {
    return <GroupWarningAlert description="You don't have permission to create a transfer in selected group" />;
  }
  return <CreateTransfer group={group.data} />;
};

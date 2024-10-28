import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { GroupQueryKey, groupService } from '@entities/group';
import { PaginationRequest, UserRole } from '@shared/types';
import { hasAccessByUserRole } from '@shared/utils';

import { GROUP_USER_LIST_COLUMNS } from './constants';
import { GroupUserListProps } from './types';

export const GroupUserList = memo(({ group, onUpdateRowClick, onDeleteRowClick }: GroupUserListProps) => {
  const handleGetGroupUsers = (params: PaginationRequest) => {
    return groupService.getGroupUsers({ ...params, id: group.data.id });
  };

  const isRenderRowAction = () => {
    return hasAccessByUserRole(UserRole.Owner, group.role);
  };

  return (
    <ManagedTable
      queryKey={[GroupQueryKey.GET_GROUP_USERS, group.data.id]}
      queryFunction={handleGetGroupUsers}
      columns={GROUP_USER_LIST_COLUMNS}
      isRenderUpdateRowAction={isRenderRowAction}
      isRenderDeleteRowAction={isRenderRowAction}
      onUpdateRowClick={onUpdateRowClick}
      onDeleteRowClick={onDeleteRowClick}
      rowKey="id"
    />
  );
});

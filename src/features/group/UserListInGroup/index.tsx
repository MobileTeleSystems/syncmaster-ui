import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { GroupQueryKey, groupService } from '@entities/group';
import { PaginationRequest } from '@shared/types';
import { useAuth } from '@entities/auth';

import { USER_LIST_IN_GROUP_COLUMNS } from './constants';
import { UserListInGroupProps } from './types';

export const UserListInGroup = memo(({ group, onUpdateRowClick, onDeleteRowClick }: UserListInGroupProps) => {
  const { id: currentUserId } = useAuth();

  const handleGetUsersInGroup = (params: PaginationRequest) => {
    return groupService.getUsersInGroup({ ...params, id: group.id });
  };

  return (
    <ManagedTable
      queryKey={[GroupQueryKey.GET_USERS_IN_GROUP, group.id]}
      queryFunction={handleGetUsersInGroup}
      columns={USER_LIST_IN_GROUP_COLUMNS}
      //TODO: [DOP-20033] It needs to rewrite to "hasAccessByUserRole" util, when role will be in response in groupService.getGroup Api
      isRenderUpdateRowAction={() => currentUserId === group.owner_id}
      //TODO: [DOP-20033] It needs to rewrite to "hasAccessByUserRole" util, when role will be in response in groupService.getGroup Api
      isRenderDeleteRowAction={() => currentUserId === group.owner_id}
      onUpdateRowClick={onUpdateRowClick}
      onDeleteRowClick={onDeleteRowClick}
      rowKey="id"
    />
  );
});

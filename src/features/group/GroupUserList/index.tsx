import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { GroupQueryKey, groupService } from '@entities/group';
import { PaginationRequest } from '@shared/types';
import { useAuth } from '@entities/auth';

import { GROUP_USER_LIST_COLUMNS } from './constants';
import { GroupUserListProps } from './types';

export const GroupUserList = memo(({ group, onUpdateRowClick, onDeleteRowClick }: GroupUserListProps) => {
  const { id: currentUserId } = useAuth();

  const handleGetGroupUsers = (params: PaginationRequest) => {
    return groupService.getGroupUsers({ ...params, id: group.id });
  };

  return (
    <ManagedTable
      queryKey={[GroupQueryKey.GET_GROUP_USERS, group.id]}
      queryFunction={handleGetGroupUsers}
      columns={GROUP_USER_LIST_COLUMNS}
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

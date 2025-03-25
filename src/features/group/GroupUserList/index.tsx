import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { GroupQueryKey, groupService } from '@entities/group';
import { PaginationRequest, UserRole } from '@shared/types';
import { hasAccessByUserRole } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import { GroupUserListProps } from './types';
import { getGroupUserListColumns } from './utils';

export const GroupUserList = memo(({ group, onUpdateRowClick, onDeleteRowClick }: GroupUserListProps) => {
  const { t } = useTranslation();

  const handleGetGroupUsers = (params: PaginationRequest) => {
    return groupService.getGroupUsers({ ...params, id: group.data.id });
  };

  const isRenderRowAction = () => {
    return hasAccessByUserRole(UserRole.OWNER, group.role);
  };

  return (
    <ManagedTable
      queryKey={[GroupQueryKey.GET_GROUP_USERS, group.data.id]}
      queryFunction={handleGetGroupUsers}
      columns={getGroupUserListColumns(t)}
      isHiddenRowActions={!hasAccessByUserRole(UserRole.OWNER, group.role)}
      isRenderUpdateRowAction={isRenderRowAction}
      isRenderDeleteRowAction={isRenderRowAction}
      onUpdateRowClick={onUpdateRowClick}
      onDeleteRowClick={onDeleteRowClick}
      rowKey="id"
    />
  );
});

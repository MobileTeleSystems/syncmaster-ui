import React from 'react';
import { ManagedTable } from '@shared/ui';
import { Group, GroupQueryKey, groupService } from '@entities/group';
import { useNavigate } from 'react-router-dom';
import { hasAccessByUserRole } from '@shared/utils';
import { UserRole } from '@shared/types';

import { GROUP_LIST_COLUMNS } from './constants';

export const GroupList = () => {
  const navigate = useNavigate();

  const handleUpdateRowClick = (record: Group) => {
    navigate(`/groups/${record.data.id}/update`);
  };

  return (
    <ManagedTable
      queryKey={[GroupQueryKey.GET_GROUPS]}
      queryFunction={groupService.getGroups}
      columns={GROUP_LIST_COLUMNS}
      isRenderUpdateRowAction={(record) => hasAccessByUserRole(UserRole.Owner, record.role)}
      onUpdateRowClick={handleUpdateRowClick}
      rowKey={(row) => row.data.id}
    />
  );
};

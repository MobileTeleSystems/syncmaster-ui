import React from 'react';
import { ManagedTable } from '@shared/ui';
import { Group, GroupQueryKey, groupService } from '@entities/group';
import { useNavigate } from 'react-router-dom';
import { hasAccessByUserRole } from '@shared/utils';
import { UserRole } from '@shared/types';
import { useTranslation } from 'react-i18next';

import { getGroupListColumns } from './utils';

export const GroupList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleUpdateRowClick = (record: Group) => {
    navigate(`/groups/${record.data.id}/update`);
  };

  return (
    <ManagedTable
      queryKey={[GroupQueryKey.GET_GROUPS]}
      queryFunction={groupService.getGroups}
      columns={getGroupListColumns(t)}
      isRenderUpdateRowAction={(record) => hasAccessByUserRole(UserRole.OWNER, record.role)}
      onUpdateRowClick={handleUpdateRowClick}
      rowKey={(row) => row.data.id}
    />
  );
};

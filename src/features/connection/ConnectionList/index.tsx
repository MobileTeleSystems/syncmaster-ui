import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { hasAccessByUserRole } from '@shared/utils';
import { UserRole } from '@shared/types';
import { ConnectionQueryKey, connectionService } from '@entities/connection';

import { CONNECTION_LIST_COLUMNS } from './constants';
import { ConnectionListProps } from './types';

export const ConnectionList = memo(({ group, onUpdateRowClick, onDeleteRowClick }: ConnectionListProps) => {
  return (
    <ManagedTable
      queryKey={[ConnectionQueryKey.GET_CONNECTIONS, group.data.id]}
      queryFunction={(params) => connectionService.getConnections({ ...params, group_id: group.data.id })}
      columns={CONNECTION_LIST_COLUMNS}
      isRenderUpdateRowAction={() => hasAccessByUserRole(UserRole.Developer, group.role)}
      isRenderDeleteRowAction={() => hasAccessByUserRole(UserRole.Maintainer, group.role)}
      onUpdateRowClick={onUpdateRowClick}
      onDeleteRowClick={onDeleteRowClick}
      rowKey="id"
    />
  );
});

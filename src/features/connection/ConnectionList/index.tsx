import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { hasAccessByUserRole } from '@shared/utils';
import { UserRole } from '@shared/types';
import { ConnectionQueryKey, connectionService } from '@entities/connection';
import { useTranslation } from 'react-i18next';

import { ConnectionListProps } from './types';
import { getConnectionListColumns } from './utils';

export const ConnectionList = memo(({ group, onUpdateRowClick, onDeleteRowClick }: ConnectionListProps) => {
  const { t } = useTranslation('shared');

  return (
    <ManagedTable
      queryKey={[ConnectionQueryKey.GET_CONNECTIONS, group.data.id]}
      queryFunction={(params) => connectionService.getConnections({ ...params, group_id: group.data.id })}
      columns={getConnectionListColumns(t)}
      isHiddenRowActions={!hasAccessByUserRole(UserRole.DEVELOPER, group.role)}
      isRenderUpdateRowAction={() => hasAccessByUserRole(UserRole.DEVELOPER, group.role)}
      isRenderDeleteRowAction={() => hasAccessByUserRole(UserRole.MAINTAINER, group.role)}
      onUpdateRowClick={onUpdateRowClick}
      onDeleteRowClick={onDeleteRowClick}
      rowKey="id"
    />
  );
});

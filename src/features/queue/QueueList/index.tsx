import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { QueueQueryKey, queueService } from '@entities/queue';
import { hasAccessByUserRole } from '@shared/utils';
import { UserRole } from '@shared/types';

import { QUEUE_LIST_COLUMNS } from './constants';
import { QueueListProps } from './types';

export const QueueList = memo(({ group, onUpdateRowClick, onDeleteRowClick }: QueueListProps) => {
  return (
    <ManagedTable
      queryKey={[QueueQueryKey.GET_QUEUES, group.data.id]}
      queryFunction={(params) => queueService.getQueues({ ...params, group_id: group.data.id })}
      columns={QUEUE_LIST_COLUMNS}
      isHiddenRowActions={!hasAccessByUserRole(UserRole.Maintainer, group.role)}
      isRenderUpdateRowAction={() => hasAccessByUserRole(UserRole.Maintainer, group.role)}
      isRenderDeleteRowAction={() => hasAccessByUserRole(UserRole.Maintainer, group.role)}
      onUpdateRowClick={onUpdateRowClick}
      onDeleteRowClick={onDeleteRowClick}
      rowKey="id"
    />
  );
});

import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { QueueQueryKey, queueService } from '@entities/queue';
import { hasAccessByUserRole } from '@shared/utils';
import { UserRole } from '@shared/types';
import { useTranslation } from 'react-i18next';

import { QueueListProps } from './types';
import { getQueueListColumns } from './utils';

export const QueueList = memo(({ group, onUpdateRowClick, onDeleteRowClick }: QueueListProps) => {
  const { t } = useTranslation();

  return (
    <ManagedTable
      queryKey={[QueueQueryKey.GET_QUEUES, group.data.id]}
      queryFunction={(params) => queueService.getQueues({ ...params, group_id: group.data.id })}
      columns={getQueueListColumns(t)}
      isHiddenRowActions={!hasAccessByUserRole(UserRole.MAINTAINER, group.role)}
      isRenderUpdateRowAction={() => hasAccessByUserRole(UserRole.MAINTAINER, group.role)}
      isRenderDeleteRowAction={() => hasAccessByUserRole(UserRole.MAINTAINER, group.role)}
      onUpdateRowClick={onUpdateRowClick}
      onDeleteRowClick={onDeleteRowClick}
      rowKey="id"
    />
  );
});

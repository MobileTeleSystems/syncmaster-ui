import React from 'react';
import { ManagedTable } from '@shared/ui';
import { QueueQueryKey, queueService } from '@entities/queue';
import { useSelectedGroup } from '@entities/group';
import { Alert } from 'antd';

import { QUEUE_LIST_COLUMNS } from './constants';

export const QueueList = () => {
  const { group } = useSelectedGroup();

  if (!group?.data.id) {
    return (
      <Alert message="Warning" description="You need to select a group to see queue list" type="warning" showIcon />
    );
  }

  return (
    <ManagedTable
      queryKey={[QueueQueryKey.GET_QUEUES, group.data.id]}
      queryFunction={(params) => queueService.getQueues({ ...params, group_id: group.data.id })}
      columns={QUEUE_LIST_COLUMNS}
      rowKey="id"
    />
  );
};

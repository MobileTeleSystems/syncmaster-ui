import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { GroupQueryKey, groupService } from '@entities/group';

import { GROUP_LIST_COLUMNS } from './constants';

export const GroupList = memo(() => {
  return (
    <ManagedTable
      queryKey={[GroupQueryKey.GET_GROUPS]}
      queryFunction={groupService.getGroups}
      columns={GROUP_LIST_COLUMNS}
      rowKey="id"
    />
  );
});

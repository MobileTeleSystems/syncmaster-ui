import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { USER_API, UserQueryKey } from '@entities/user';

import { USER_LIST_COLUMNS } from './constants';

export const UserList = memo(() => {
  return (
    <ManagedTable
      queryKey={[UserQueryKey.GET_USERS]}
      queryFunction={USER_API.getUsers}
      columns={USER_LIST_COLUMNS}
      rowKey="id"
    />
  );
});

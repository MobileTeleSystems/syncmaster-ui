import React from 'react';
import { ManagedTable } from '@shared/ui';
import { userService, UserQueryKey } from '@entities/user';

import { USER_LIST_COLUMNS } from './constants';

export const UserList = () => {
  return (
    <ManagedTable
      queryKey={[UserQueryKey.GET_USERS]}
      queryFunction={userService.getUsers}
      columns={USER_LIST_COLUMNS}
      isHiddenRowActions
      rowKey="id"
    />
  );
};

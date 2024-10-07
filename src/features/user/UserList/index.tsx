import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { User, userApi, UserQueryKey } from '@entities/user';
import { useNavigate } from 'react-router-dom';

import { USER_LIST_COLUMNS } from './constants';

export const UserList = memo(() => {
  const navigate = useNavigate();

  const handleRowClick = (record: User) => {
    navigate(`/users/${record.id}`);
  };

  return (
    <ManagedTable
      queryKey={[UserQueryKey.GET_USERS]}
      queryFunction={userApi.getUsers}
      columns={USER_LIST_COLUMNS}
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
      rowKey="id"
    />
  );
});

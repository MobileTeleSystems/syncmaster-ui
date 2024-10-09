import React from 'react';
import { User } from '@entities/user';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { Link } from 'react-router-dom';

export const USER_LIST_COLUMNS: TableColumns<PaginationResponse<User>> = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: 250,
  },
  {
    title: 'Username',
    dataIndex: 'username',
    render: (username, record) => <Link to={`/users/${record.id}`}>{username}</Link>,
  },
  {
    title: 'Is superuser',
    dataIndex: 'is_superuser',
    render: (value) => (value ? 'Yes' : 'No'),
    width: 150,
  },
];

import { User } from '@entities/user';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';

export const USER_LIST_COLUMNS: TableColumns<PaginationResponse<User>> = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: 250,
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Is superuser',
    dataIndex: 'is_superuser',
    render: (value) => (value ? 'Yes' : 'Not'),
    width: 150,
  },
];

import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { UserInGroup } from '@entities/group';

export const USER_LIST_IN_GROUP_COLUMNS: TableColumns<PaginationResponse<UserInGroup>> = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: 150,
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    width: 200,
  },
];

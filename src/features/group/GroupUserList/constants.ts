import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { GroupUser } from '@entities/group';

export const GROUP_USER_LIST_COLUMNS: TableColumns<PaginationResponse<GroupUser>> = [
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

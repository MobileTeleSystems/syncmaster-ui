import { GroupUser } from '@entities/group';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { TFunction } from 'i18next';

export const getGroupUserListColumns = (t: TFunction) => {
  const columns: TableColumns<PaginationResponse<GroupUser>> = [
    {
      title: t('id'),
      dataIndex: 'id',
      width: 150,
    },
    {
      title: t('username', { ns: 'auth' }),
      dataIndex: 'username',
    },
    {
      title: t('role', { ns: 'group' }),
      dataIndex: 'role',
      width: 200,
    },
  ];

  return columns;
};

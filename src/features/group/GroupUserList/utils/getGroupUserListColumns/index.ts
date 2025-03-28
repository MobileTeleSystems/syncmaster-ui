import { GroupUser } from '@entities/group';
import { USER_ROLE_DISPLAY } from '@shared/constants';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { TFunction } from 'i18next';

export const getGroupUserListColumns = (t: TFunction) => {
  const columns: TableColumns<PaginationResponse<GroupUser>> = [
    {
      title: t('id'),
      dataIndex: 'id',
      width: 160,
    },
    {
      title: t('username', { ns: 'auth' }),
      dataIndex: 'username',
      width: 400,
    },
    {
      title: t('role', { ns: 'group' }),
      dataIndex: 'role',
      render: (name, record) => t(USER_ROLE_DISPLAY[record.role], { ns: 'auth' }),
      width: 200,
    },
  ];

  return columns;
};

import React, { useCallback, useState } from 'react';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { GroupUser } from '@entities/group';
import { GroupUserList } from '@features/group';
import { Typography } from 'antd';
import { useModalState } from '@shared/hooks';
import { UserRole } from '@shared/types';
import { useTranslation } from 'react-i18next';

import { GroupUsersProps } from './types';
import { AddGroupUserButton, DeleteGroupUserModal, UpdateGroupUserModal } from './components';
import classes from './styles.module.less';

const { Text } = Typography;

export const GroupUsers = ({ group }: GroupUsersProps) => {
  const { t } = useTranslation('group');
  const [selectedUser, setSelectedUser] = useState<GroupUser>();

  const {
    isOpened: isOpenedUpdateUserModal,
    handleOpen: handleOpenUpdateUserModal,
    handleClose: handleCloseUpdateUserModal,
  } = useModalState();

  const {
    isOpened: isOpenedDeleteUserModal,
    handleOpen: handleOpenDeleteUserModal,
    handleClose: handleCloseDeleteUserModal,
  } = useModalState();

  const handleUpdateUserClick = useCallback(
    (user: GroupUser) => {
      setSelectedUser(user);
      handleOpenUpdateUserModal();
    },
    [handleOpenUpdateUserModal],
  );

  const handleDeleteUserClick = useCallback(
    (user: GroupUser) => {
      setSelectedUser(user);
      handleOpenDeleteUserModal();
    },
    [handleOpenDeleteUserModal],
  );

  return (
    <PageContentWrapper>
      <AccessWrapper accessRole={UserRole.OWNER} currentRole={group.role}>
        <UpdateGroupUserModal
          groupId={group.data.id}
          user={selectedUser}
          open={isOpenedUpdateUserModal}
          onClose={handleCloseUpdateUserModal}
        />
        <DeleteGroupUserModal
          groupId={group.data.id}
          user={selectedUser}
          open={isOpenedDeleteUserModal}
          onClose={handleCloseDeleteUserModal}
        />
      </AccessWrapper>

      <PageContentWrapper>
        <div className={classes.header}>
          <Text className={classes.subtitle} strong>
            {t('groupMembers')}
          </Text>
          <AccessWrapper accessRole={UserRole.OWNER} currentRole={group.role}>
            <AddGroupUserButton groupId={group.data.id} />
          </AccessWrapper>
        </div>
        <GroupUserList
          group={group}
          onUpdateRowClick={handleUpdateUserClick}
          onDeleteRowClick={handleDeleteUserClick}
        />
      </PageContentWrapper>
    </PageContentWrapper>
  );
};

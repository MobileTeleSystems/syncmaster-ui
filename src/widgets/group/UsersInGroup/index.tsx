import React, { useCallback, useState } from 'react';
import { PageContentWrapper } from '@shared/ui';
import { UserInGroup } from '@entities/group';
import { UserListInGroup } from '@features/group';
import { Button, Typography } from 'antd';
import { useModalState } from '@shared/hooks';

import { UsersInGroupProps } from './types';
import { AddUserToGroupModal, DeleteUserFromGroupModal, UpdateUserInGroupModal } from './components';
import classes from './styles.module.less';

const { Text } = Typography;

export const UsersInGroup = ({ group }: UsersInGroupProps) => {
  const [selectedUser, setSelectedUser] = useState<UserInGroup>();

  const {
    isOpened: isOpenedAddUserModal,
    handleOpen: handleOpenAddUserModal,
    handleClose: handleCloseAddUserModal,
  } = useModalState();

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
    (user: UserInGroup) => {
      setSelectedUser(user);
      handleOpenUpdateUserModal();
    },
    [handleOpenUpdateUserModal],
  );

  const handleDeleteUserClick = useCallback(
    (user: UserInGroup) => {
      setSelectedUser(user);
      handleOpenDeleteUserModal();
    },
    [handleOpenDeleteUserModal],
  );

  return (
    <PageContentWrapper>
      <AddUserToGroupModal groupId={group.id} open={isOpenedAddUserModal} onClose={handleCloseAddUserModal} />
      <UpdateUserInGroupModal
        groupId={group.id}
        user={selectedUser}
        open={isOpenedUpdateUserModal}
        onClose={handleCloseUpdateUserModal}
      />
      <DeleteUserFromGroupModal
        groupId={group.id}
        user={selectedUser}
        open={isOpenedDeleteUserModal}
        onClose={handleCloseDeleteUserModal}
      />

      <PageContentWrapper>
        <div className={classes.header}>
          <Text className={classes.subtitle} strong>
            Group members
          </Text>
          <Button className={classes.addUserButton} type="primary" size="large" onClick={handleOpenAddUserModal}>
            Add user
          </Button>
        </div>
        <UserListInGroup
          group={group}
          onUpdateRowClick={handleUpdateUserClick}
          onDeleteRowClick={handleDeleteUserClick}
        />
      </PageContentWrapper>
    </PageContentWrapper>
  );
};

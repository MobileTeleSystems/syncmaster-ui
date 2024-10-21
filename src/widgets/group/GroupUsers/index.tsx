import React, { useCallback, useState } from 'react';
import { PageContentWrapper } from '@shared/ui';
import { GroupUser } from '@entities/group';
import { GroupUserList } from '@features/group';
import { Button, Typography } from 'antd';
import { useModalState } from '@shared/hooks';

import { GroupUsersProps } from './types';
import { AddGroupUserModal, DeleteGroupUserModal, UpdateGroupUserModal } from './components';
import classes from './styles.module.less';

const { Text } = Typography;

export const GroupUsers = ({ group }: GroupUsersProps) => {
  const [selectedUser, setSelectedUser] = useState<GroupUser>();

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
      <AddGroupUserModal groupId={group.id} open={isOpenedAddUserModal} onClose={handleCloseAddUserModal} />
      <UpdateGroupUserModal
        groupId={group.id}
        user={selectedUser}
        open={isOpenedUpdateUserModal}
        onClose={handleCloseUpdateUserModal}
      />
      <DeleteGroupUserModal
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
        <GroupUserList
          group={group}
          onUpdateRowClick={handleUpdateUserClick}
          onDeleteRowClick={handleDeleteUserClick}
        />
      </PageContentWrapper>
    </PageContentWrapper>
  );
};

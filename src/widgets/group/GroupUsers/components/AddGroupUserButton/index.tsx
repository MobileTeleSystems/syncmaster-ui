import { Button } from 'antd';
import React, { memo } from 'react';
import { useModalState } from '@shared/hooks';

import { AddGroupUserModal } from './components';
import classes from './styles.module.less';
import { AddGroupUserButtonProps } from './types';

export const AddGroupUserButton = memo(({ groupId }: AddGroupUserButtonProps) => {
  const {
    isOpened: isOpenedAddUserModal,
    handleOpen: handleOpenAddUserModal,
    handleClose: handleCloseAddUserModal,
  } = useModalState();

  return (
    <>
      <Button className={classes.addUserButton} type="primary" size="large" onClick={handleOpenAddUserModal}>
        Add user
      </Button>
      <AddGroupUserModal groupId={groupId} open={isOpenedAddUserModal} onClose={handleCloseAddUserModal} />
    </>
  );
});

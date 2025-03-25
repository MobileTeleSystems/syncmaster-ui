import { Button } from 'antd';
import React, { memo } from 'react';
import { useModalState } from '@shared/hooks';
import { useTranslation } from 'react-i18next';

import { AddGroupUserModal } from './components';
import classes from './styles.module.less';
import { AddGroupUserButtonProps } from './types';

export const AddGroupUserButton = memo(({ groupId }: AddGroupUserButtonProps) => {
  const { t } = useTranslation('group');
  const {
    isOpened: isOpenedAddUserModal,
    handleOpen: handleOpenAddUserModal,
    handleClose: handleCloseAddUserModal,
  } = useModalState();

  return (
    <>
      <Button className={classes.addUserButton} type="primary" size="large" onClick={handleOpenAddUserModal}>
        {t('addUser')}
      </Button>
      <AddGroupUserModal groupId={groupId} open={isOpenedAddUserModal} onClose={handleCloseAddUserModal} />
    </>
  );
});

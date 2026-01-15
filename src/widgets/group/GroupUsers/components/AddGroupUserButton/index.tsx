import React, { memo } from 'react';
import { useModalState } from '@shared/hooks';
import { useTranslation } from 'react-i18next';
import { ActionButton } from '@shared/ui';

import { AddGroupUserModal } from './components';
import * as classes from './styles.module.less';
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
      <ActionButton className={classes.addUserButton} actionType="create" onClick={handleOpenAddUserModal}>
        {t('addUser')}
      </ActionButton>
      <AddGroupUserModal groupId={groupId} open={isOpenedAddUserModal} onClose={handleCloseAddUserModal} />
    </>
  );
});

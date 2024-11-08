import React, { memo } from 'react';
import { Button } from 'antd';
import { useModalState } from '@shared/hooks';

import { CreateRunModal } from './components';
import classes from './styles.module.less';
import { CreateRunButtonProps } from './types';

export const CreateRunButton = memo(({ transferId, transferName }: CreateRunButtonProps) => {
  const {
    isOpened: isOpenedCreateRunModal,
    handleOpen: handleOpenCreateRunModal,
    handleClose: handleCloseCreateRunModal,
  } = useModalState();

  return (
    <>
      <Button className={classes.button} type="primary" size="large" onClick={handleOpenCreateRunModal}>
        Run transfer
      </Button>
      <CreateRunModal
        transferId={transferId}
        transferName={transferName}
        open={isOpenedCreateRunModal}
        onClose={handleCloseCreateRunModal}
      />
    </>
  );
});

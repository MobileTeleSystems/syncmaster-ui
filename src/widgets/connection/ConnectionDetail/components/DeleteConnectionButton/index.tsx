import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { Button } from 'antd';
import React from 'react';
import { DeleteConnection } from '@features/connection';
import { useNavigate } from 'react-router-dom';

import { DeleteConnectionButtonProps } from './types';

export const DeleteConnectionButton = ({ connection }: DeleteConnectionButtonProps) => {
  const navigate = useNavigate();

  const {
    isOpened: isOpenedDeleteConnectionModal,
    handleOpen: handleOpenDeleteConnectionModal,
    handleClose: handleCloseDeleteConnectionModal,
  } = useModalState();

  const handleSuccessDeleteConnection = () => {
    navigate('/connections');
    handleCloseDeleteConnectionModal();
  };

  return (
    <>
      <Button type="primary" size="large" danger onClick={handleOpenDeleteConnectionModal}>
        Delete connection
      </Button>
      <ModalWrapper
        title="Delete connection"
        width={DEFAULT_MODAL_DELETE_WIDTH}
        open={isOpenedDeleteConnectionModal}
        onCancel={handleCloseDeleteConnectionModal}
      >
        <DeleteConnection
          connection={connection}
          onSuccess={handleSuccessDeleteConnection}
          onCancel={handleCloseDeleteConnectionModal}
        />
      </ModalWrapper>
    </>
  );
};

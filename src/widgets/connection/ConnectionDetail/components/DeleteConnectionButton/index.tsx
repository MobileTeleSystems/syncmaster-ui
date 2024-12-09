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

  const { isOpened: isOpenedModal, handleOpen: handleOpenModal, handleClose: handleCloseModal } = useModalState();

  const handleSuccessDeleteConnection = () => {
    navigate('/connections');
    handleCloseModal();
  };

  return (
    <>
      <Button type="primary" size="large" danger onClick={handleOpenModal}>
        Delete Connection
      </Button>
      <ModalWrapper
        title="Delete Connection"
        width={DEFAULT_MODAL_DELETE_WIDTH}
        open={isOpenedModal}
        onCancel={handleCloseModal}
      >
        <DeleteConnection
          connection={connection}
          onSuccess={handleSuccessDeleteConnection}
          onCancel={handleCloseModal}
        />
      </ModalWrapper>
    </>
  );
};

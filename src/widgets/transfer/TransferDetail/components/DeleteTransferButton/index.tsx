import React from 'react';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DeleteTransfer } from '@features/transfer';

import { DeleteTransferButtonProps } from './types';

export const DeleteTransferButton = ({ transfer }: DeleteTransferButtonProps) => {
  const navigate = useNavigate();

  const { isOpened: isOpenedModal, handleOpen: handleOpenModal, handleClose: handleCloseModal } = useModalState();

  const handleSuccessDeleteTransfer = () => {
    navigate('/transfers');
    handleCloseModal();
  };

  return (
    <>
      <Button type="primary" size="large" danger onClick={handleOpenModal}>
        Delete Transfer
      </Button>
      <ModalWrapper
        title="Delete Transfer"
        width={DEFAULT_MODAL_DELETE_WIDTH}
        open={isOpenedModal}
        onCancel={handleCloseModal}
      >
        <DeleteTransfer transfer={transfer} onSuccess={handleSuccessDeleteTransfer} onCancel={handleCloseModal} />
      </ModalWrapper>
    </>
  );
};

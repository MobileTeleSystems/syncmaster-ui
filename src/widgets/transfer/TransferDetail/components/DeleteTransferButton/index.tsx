import React from 'react';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useModalState } from '@shared/hooks';
import { ActionButton, ModalWrapper } from '@shared/ui';
import { useNavigate } from 'react-router-dom';
import { DeleteTransfer } from '@features/transfer';
import { useTranslation } from 'react-i18next';

import { DeleteTransferButtonProps } from './types';

export const DeleteTransferButton = ({ transfer }: DeleteTransferButtonProps) => {
  const { t } = useTranslation('transfer');
  const navigate = useNavigate();

  const { isOpened: isOpenedModal, handleOpen: handleOpenModal, handleClose: handleCloseModal } = useModalState();

  const handleSuccessDeleteTransfer = () => {
    navigate('/transfers');
    handleCloseModal();
  };

  return (
    <>
      <ActionButton actionType="delete" onClick={handleOpenModal} />
      <ModalWrapper
        title={t('deleteTransfer')}
        width={DEFAULT_MODAL_DELETE_WIDTH}
        open={isOpenedModal}
        onCancel={handleCloseModal}
      >
        <DeleteTransfer transfer={transfer} onSuccess={handleSuccessDeleteTransfer} onCancel={handleCloseModal} />
      </ModalWrapper>
    </>
  );
};

import React from 'react';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { Button } from 'antd';
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
      <Button type="primary" size="large" danger onClick={handleOpenModal}>
        {t('deleteTransfer')}
      </Button>
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

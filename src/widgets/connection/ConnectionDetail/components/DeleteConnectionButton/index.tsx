import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useModalState } from '@shared/hooks';
import { ActionButton, ModalWrapper } from '@shared/ui';
import React from 'react';
import { DeleteConnection } from '@features/connection';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DeleteConnectionButtonProps } from './types';

export const DeleteConnectionButton = ({ connection }: DeleteConnectionButtonProps) => {
  const { t } = useTranslation('connection');
  const navigate = useNavigate();

  const { isOpened: isOpenedModal, handleOpen: handleOpenModal, handleClose: handleCloseModal } = useModalState();

  const handleSuccessDeleteConnection = () => {
    navigate('/connections');
    handleCloseModal();
  };

  return (
    <>
      <ActionButton actionType="delete" onClick={handleOpenModal} />
      <ModalWrapper
        title={t('deleteConnection')}
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

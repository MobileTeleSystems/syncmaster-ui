import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { Button } from 'antd';
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
      <Button type="primary" size="large" danger onClick={handleOpenModal}>
        {t('deleteConnection')}
      </Button>
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

import { DeleteQueue } from '@features/queue';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useModalState } from '@shared/hooks';
import { ActionButton, ModalWrapper } from '@shared/ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DeleteQueueButtonProps } from './types';

export const DeleteQueueButton = ({ queue }: DeleteQueueButtonProps) => {
  const { t } = useTranslation('queue');
  const navigate = useNavigate();

  const {
    isOpened: isOpenedDeleteQueueModal,
    handleOpen: handleOpenDeleteQueueModal,
    handleClose: handleCloseDeleteQueueModal,
  } = useModalState();

  const handleSuccessDeleteQueue = () => {
    navigate('/queues');
    handleCloseDeleteQueueModal();
  };

  return (
    <>
      <ActionButton actionType="delete" onClick={handleOpenDeleteQueueModal} />
      <ModalWrapper
        title={t('deleteQueue')}
        width={DEFAULT_MODAL_DELETE_WIDTH}
        open={isOpenedDeleteQueueModal}
        onCancel={handleCloseDeleteQueueModal}
      >
        <DeleteQueue queue={queue} onSuccess={handleSuccessDeleteQueue} onCancel={handleCloseDeleteQueueModal} />
      </ModalWrapper>
    </>
  );
};

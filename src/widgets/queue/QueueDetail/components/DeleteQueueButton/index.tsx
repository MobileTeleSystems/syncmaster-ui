import { DeleteQueue } from '@features/queue';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DeleteQueueButtonProps } from './types';

export const DeleteQueueButton = ({ queue }: DeleteQueueButtonProps) => {
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
      <Button type="primary" size="large" danger onClick={handleOpenDeleteQueueModal}>
        Delete Queue
      </Button>
      <ModalWrapper
        title="Delete Queue"
        width={DEFAULT_MODAL_DELETE_WIDTH}
        open={isOpenedDeleteQueueModal}
        onCancel={handleCloseDeleteQueueModal}
      >
        <DeleteQueue queue={queue} onSuccess={handleSuccessDeleteQueue} onCancel={handleCloseDeleteQueueModal} />
      </ModalWrapper>
    </>
  );
};

import { DeleteQueue } from '@features/queue';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { Button } from 'antd';
import React from 'react';

import { DeleteQueueButtonProps } from './types';

export const DeleteQueueButton = ({ queue }: DeleteQueueButtonProps) => {
  const {
    isOpened: isOpenedDeleteQueueModal,
    handleOpen: handleOpenDeleteQueueModal,
    handleClose: handleCloseDeleteQueueModal,
  } = useModalState();

  return (
    <>
      <Button type="primary" size="large" danger onClick={handleOpenDeleteQueueModal}>
        Delete queue
      </Button>
      <ModalWrapper
        title="Delete queue"
        width={DEFAULT_MODAL_DELETE_WIDTH}
        open={isOpenedDeleteQueueModal}
        onCancel={handleCloseDeleteQueueModal}
      >
        <DeleteQueue queue={queue} onSuccess={handleCloseDeleteQueueModal} onCancel={handleCloseDeleteQueueModal} />
      </ModalWrapper>
    </>
  );
};

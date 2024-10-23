import { DeleteQueue } from '@features/queue';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { Button } from 'antd';
import React from 'react';
import { UserRole } from '@shared/types';
import { hasAccessByUserRole } from '@shared/utils';

import { DeleteQueueButtonProps } from './types';

export const DeleteQueueButton = ({ queue, groupUserRole }: DeleteQueueButtonProps) => {
  const {
    isOpened: isOpenedDeleteQueueModal,
    handleOpen: handleOpenDeleteQueueModal,
    handleClose: handleCloseDeleteQueueModal,
  } = useModalState();

  if (!hasAccessByUserRole(UserRole.Maintainer, groupUserRole)) {
    return null;
  }

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

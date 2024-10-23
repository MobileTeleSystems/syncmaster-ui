import React, { useCallback, useState } from 'react';
import { Queue } from '@entities/queue';
import { useNavigate } from 'react-router-dom';
import { DeleteQueue, QueueList } from '@features/queue';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';

import { QueueListWrapperProps } from './types';

export const QueueListWrapper = ({ group }: QueueListWrapperProps) => {
  const navigate = useNavigate();
  const [selectedQueue, setSelectedQueue] = useState<Queue>();

  const {
    isOpened: isOpenedDeleteQueueModal,
    handleOpen: handleOpenDeleteQueueModal,
    handleClose: handleCloseDeleteQueueModal,
  } = useModalState();

  const handleDeleteUserClick = useCallback(
    (queue: Queue) => {
      setSelectedQueue(queue);
      handleOpenDeleteQueueModal();
    },
    [handleOpenDeleteQueueModal],
  );

  const handleUpdateRowClick = useCallback(
    (record: Queue) => {
      navigate(`/queues/${record.id}/update`);
    },
    [navigate],
  );

  return (
    <>
      {selectedQueue && (
        <ModalWrapper
          title="Delete queue"
          width={DEFAULT_MODAL_DELETE_WIDTH}
          open={isOpenedDeleteQueueModal}
          onCancel={handleCloseDeleteQueueModal}
        >
          <DeleteQueue
            queue={selectedQueue}
            onSuccess={handleCloseDeleteQueueModal}
            onCancel={handleCloseDeleteQueueModal}
          />
        </ModalWrapper>
      )}

      <QueueList group={group} onUpdateRowClick={handleUpdateRowClick} onDeleteRowClick={handleDeleteUserClick} />
    </>
  );
};

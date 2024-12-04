import React, { useCallback, useState } from 'react';
import { ConnectionList, DeleteConnection } from '@features/connection';
import { ModalWrapper } from '@shared/ui';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useNavigate } from 'react-router-dom';
import { Connection } from '@entities/connection';
import { useModalState } from '@shared/hooks';

import { ConnectionListWrapperProps } from './types';

export const ConnectionListWrapper = ({ group }: ConnectionListWrapperProps) => {
  const navigate = useNavigate();
  const [selectedConnection, setSelectedConnection] = useState<Connection>();

  const {
    isOpened: isOpenedDeleteConnectionModal,
    handleOpen: handleOpenDeleteConnectionModal,
    handleClose: handleCloseDeleteConnectionModal,
  } = useModalState();

  const handleDeleteUserClick = useCallback(
    (connection: Connection) => {
      setSelectedConnection(connection);
      handleOpenDeleteConnectionModal();
    },
    [handleOpenDeleteConnectionModal],
  );

  const handleUpdateRowClick = useCallback(
    (record: Connection) => {
      navigate(`/connections/${record.id}/update`);
    },
    [navigate],
  );

  return (
    <>
      {selectedConnection && (
        <ModalWrapper
          title="Delete connection"
          width={DEFAULT_MODAL_DELETE_WIDTH}
          open={isOpenedDeleteConnectionModal}
          onCancel={handleCloseDeleteConnectionModal}
        >
          <DeleteConnection
            connection={selectedConnection}
            onSuccess={handleCloseDeleteConnectionModal}
            onCancel={handleCloseDeleteConnectionModal}
          />
        </ModalWrapper>
      )}

      <ConnectionList group={group} onUpdateRowClick={handleUpdateRowClick} onDeleteRowClick={handleDeleteUserClick} />
    </>
  );
};

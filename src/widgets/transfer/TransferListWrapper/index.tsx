import React, { useCallback, useState } from 'react';
import { DeleteTransfer, TransferList } from '@features/transfer';
import { Transfer } from '@entities/transfer';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useNavigate } from 'react-router-dom';

import { TransferListWrapperProps } from './types';

export const TransferListWrapper = ({ group }: TransferListWrapperProps) => {
  const navigate = useNavigate();
  const [selectedTransfer, setSelectedTransfer] = useState<Transfer>();

  const {
    isOpened: isOpenedDeleteTransferModal,
    handleOpen: handleOpenDeleteTransferModal,
    handleClose: handleCloseDeleteTransferModal,
  } = useModalState();

  const handleDeleteUserClick = useCallback(
    (transfer: Transfer) => {
      setSelectedTransfer(transfer);
      handleOpenDeleteTransferModal();
    },
    [handleOpenDeleteTransferModal],
  );

  const handleUpdateRowClick = useCallback(
    (record: Transfer) => {
      navigate(`/transfers/${record.id}/update`);
    },
    [navigate],
  );

  return (
    <>
      {selectedTransfer && (
        <ModalWrapper
          title="Delete Transfer"
          width={DEFAULT_MODAL_DELETE_WIDTH}
          open={isOpenedDeleteTransferModal}
          onCancel={handleCloseDeleteTransferModal}
        >
          <DeleteTransfer
            transfer={selectedTransfer}
            onSuccess={handleCloseDeleteTransferModal}
            onCancel={handleCloseDeleteTransferModal}
          />
        </ModalWrapper>
      )}
      <TransferList group={group} onUpdateRowClick={handleUpdateRowClick} onDeleteRowClick={handleDeleteUserClick} />
    </>
  );
};

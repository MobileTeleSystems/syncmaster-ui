import React, { useCallback, useState } from 'react';
import { DeleteTransfer, TransferList } from '@features/transfer';
import { Transfer } from '@entities/transfer';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';

import { TransferListWrapperProps } from './types';

export const TransferListWrapper = ({ group }: TransferListWrapperProps) => {
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

  return (
    <>
      {selectedTransfer && (
        <ModalWrapper
          title="Delete transfer"
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
      <TransferList group={group} onDeleteRowClick={handleDeleteUserClick} />;
    </>
  );
};

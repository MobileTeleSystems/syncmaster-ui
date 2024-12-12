import React from 'react';
import { ManagedForm } from '@shared/ui';
import { useNavigate } from 'react-router-dom';
import { Transfer, TransferQueryKey, transferService } from '@entities/transfer';
import { MutateTransferForm } from '@features/transfer';

import { UpdateTransferForm, UpdateTransferProps } from './types';

export const UpdateTransfer = ({ transfer, group }: UpdateTransferProps) => {
  const { id: transferId, group_id, ...transferInitialValues } = transfer;
  const navigate = useNavigate();

  const handleUpdateTransfer = (values: UpdateTransferForm) => {
    return transferService.updateTransfer({ id: transferId, ...values });
  };

  const onSuccess = (response: Transfer) => {
    navigate(`/transfers/${response.id}`);
  };

  const onCancel = () => {
    navigate('/transfers');
  };

  return (
    <ManagedForm<UpdateTransferForm, Transfer>
      initialValues={transferInitialValues}
      mutationFunction={handleUpdateTransfer}
      onSuccess={onSuccess}
      successMessage="Transfer was updated successfully"
      keysInvalidateQueries={[
        [{ queryKey: [TransferQueryKey.GET_TRANSFERS, group.id] }],
        [{ queryKey: [TransferQueryKey.GET_TRANSFER, transfer.id] }],
      ]}
    >
      <MutateTransferForm
        initialSourceConnectionType={transferInitialValues.source_params.type}
        initialTargetConnectionType={transferInitialValues.target_params.type}
        group={group}
        onCancel={onCancel}
      />
    </ManagedForm>
  );
};

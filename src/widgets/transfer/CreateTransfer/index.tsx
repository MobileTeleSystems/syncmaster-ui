import React from 'react';
import { ManagedForm } from '@shared/ui';
import { useNavigate } from 'react-router-dom';
import { Transfer, TransferQueryKey, transferService } from '@entities/transfer';
import { MutateTransferForm } from '@features/transfer';

import { CreateTransferForm, CreateTransferProps } from './types';
import { CREATE_TRANSFER_INITIAL_VALUES } from './constants';

export const CreateTransfer = ({ group }: CreateTransferProps) => {
  const navigate = useNavigate();

  const handleCreateTransfer = (values: CreateTransferForm) => {
    return transferService.createTransfer({ group_id: group.id, ...values });
  };

  const onSuccess = (response: Transfer) => {
    navigate(`/transfers/${response.id}`);
  };

  const onCancel = () => {
    navigate('/transfers');
  };

  return (
    <ManagedForm<CreateTransferForm, Transfer>
      initialValues={CREATE_TRANSFER_INITIAL_VALUES}
      mutationFunction={handleCreateTransfer}
      onSuccess={onSuccess}
      keysInvalidateQueries={[[{ queryKey: [TransferQueryKey.GET_TRANSFERS, group.id] }]]}
    >
      <MutateTransferForm group={group} onCancel={onCancel} />
    </ManagedForm>
  );
};

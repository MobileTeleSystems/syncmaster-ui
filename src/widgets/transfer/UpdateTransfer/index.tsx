import React from 'react';
import { ManagedForm } from '@shared/ui';
import { useNavigate } from 'react-router-dom';
import {
  prepareTransferResourcesForm,
  prepareTransferResourcesRequest,
  Transfer,
  TransferQueryKey,
  transferService,
} from '@entities/transfer';
import { MutateTransferForm } from '@features/transfer';
import { prepareTransformationForm, prepareTransformationRequest } from '@entities/transformation';
import { useTranslation } from 'react-i18next';

import { UpdateTransferForm, UpdateTransferProps } from './types';

export const UpdateTransfer = ({ transfer, group }: UpdateTransferProps) => {
  const { id: transferId, group_id, ...transferInitialValues } = transfer;
  const { t } = useTranslation('transfer');
  const navigate = useNavigate();

  const handleUpdateTransfer = ({ transformations, resources, ...values }: UpdateTransferForm) => {
    return transferService.updateTransfer({
      id: transferId,
      group_id,
      transformations: prepareTransformationRequest(transformations),
      resources: prepareTransferResourcesRequest(resources),
      ...values,
    });
  };

  const onSuccess = (response: Transfer) => {
    navigate(`/transfers/${response.id}`);
  };

  const onCancel = () => {
    navigate('/transfers');
  };

  return (
    <ManagedForm<UpdateTransferForm, Transfer>
      initialValues={{
        ...transferInitialValues,
        transformations: prepareTransformationForm(transferInitialValues.transformations),
        resources: prepareTransferResourcesForm(transferInitialValues.resources),
      }}
      mutationFunction={handleUpdateTransfer}
      onSuccess={onSuccess}
      successMessage={t('updateTransferSuccess')}
      keysInvalidateQueries={[
        [{ queryKey: [TransferQueryKey.GET_TRANSFERS, group.id] }],
        [{ queryKey: [TransferQueryKey.GET_TRANSFER, transfer.id] }],
      ]}
    >
      <MutateTransferForm group={group} onCancel={onCancel} />
    </ManagedForm>
  );
};

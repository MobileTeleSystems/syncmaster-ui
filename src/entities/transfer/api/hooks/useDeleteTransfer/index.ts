import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import { getErrorMessage } from '@shared/config';

import { transferService } from '../../transferService';
import { TransferQueryKey } from '../../keys';
import { DeleteTransferRequest } from '../../types';

/** Hook for deleting transfer */
export const useDeleteTransfer = (data: DeleteTransferRequest): UseMutationResult => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => transferService.deleteTransfer(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TransferQueryKey.GET_TRANSFERS] });
      queryClient.removeQueries({ queryKey: [TransferQueryKey.GET_TRANSFER, data.id] });
      notification.success({
        message: 'Transfer was deleted successfully',
      });
    },
    onError: (error) => {
      notification.error({
        message: getErrorMessage(error),
      });
    },
  });
};

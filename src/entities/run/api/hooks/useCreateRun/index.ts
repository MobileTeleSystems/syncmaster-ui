import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import { getErrorMessage } from '@shared/config';

import { runService } from '../../runService';
import { CreateRunRequest } from '../../types';
import { RunQueryKey } from '../../keys';

/** Hook for creating run (run transfer) */
export const useCreateRun = (data: CreateRunRequest): UseMutationResult => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => runService.createRun(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [RunQueryKey.GET_RUNS, data.transfer_id] });
    },
    onError: (error) => {
      notification.error({
        message: getErrorMessage(error),
      });
    },
  });
};

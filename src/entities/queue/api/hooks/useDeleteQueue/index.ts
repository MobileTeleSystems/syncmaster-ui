import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import { getErrorMessage } from '@shared/config';

import { queueService } from '../../queueService';
import { DeleteQueueRequest } from '../../types';
import { QueueQueryKey } from '../../keys';

/** Hook for deleting queue */
export const useDeleteQueue = (data: DeleteQueueRequest): UseMutationResult => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => queueService.deleteQueue(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueueQueryKey.GET_QUEUES] });
      queryClient.removeQueries({ queryKey: [QueueQueryKey.GET_QUEUE, data.id] });
    },
    onError: (error) => {
      notification.error({
        message: getErrorMessage(error),
      });
    },
  });
};

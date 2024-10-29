import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';

import { GetQueueRequest, Queue } from '../../types';
import { QueueQueryKey } from '../../keys';
import { queueService } from '../../queueService';

/** Hook for getting queue info from backend */
export const useGetQueue = ({ id }: GetQueueRequest): UseSuspenseQueryResult<Queue> => {
  return useSuspenseQuery({
    queryKey: [QueueQueryKey.GET_QUEUE, id],
    queryFn: () => queueService.getQueue({ id }),
  });
};

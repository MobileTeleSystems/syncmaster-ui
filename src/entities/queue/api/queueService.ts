import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import { GetQueueRequest, GetQueuesRequest, Queue } from './types';

export const queueService = {
  getQueues: (params: GetQueuesRequest): Promise<PaginationResponse<Queue>> => {
    return axiosInstance.get('queues', { params });
  },

  getQueue: ({ id, ...params }: GetQueueRequest): Promise<Queue> => {
    return axiosInstance.get(`queues/${id}`, { params });
  },
};

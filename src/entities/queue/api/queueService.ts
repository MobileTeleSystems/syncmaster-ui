import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import {
  CreateQueueRequest,
  DeleteQueueRequest,
  GetQueueRequest,
  GetQueuesRequest,
  Queue,
  UpdateQueueRequest,
} from './types';

export const queueService = {
  getQueues: (params: GetQueuesRequest): Promise<PaginationResponse<Queue>> => {
    return axiosInstance.get('v1/queues', { params });
  },

  getQueue: ({ id, ...params }: GetQueueRequest): Promise<Queue> => {
    return axiosInstance.get(`v1/queues/${id}`, { params });
  },

  createQueue: (data: CreateQueueRequest): Promise<Queue> => {
    return axiosInstance.post(`v1/queues`, data);
  },

  updateQueue: ({ id, ...data }: UpdateQueueRequest): Promise<Queue> => {
    return axiosInstance.put(`v1/queues/${id}`, data);
  },

  deleteQueue: ({ id }: DeleteQueueRequest): Promise<null> => {
    return axiosInstance.delete(`v1/queues/${id}`);
  },
};

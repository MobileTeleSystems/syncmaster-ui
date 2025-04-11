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
    return axiosInstance.get('queues', { params });
  },

  getQueue: ({ id, ...params }: GetQueueRequest): Promise<Queue> => {
    return axiosInstance.get(`queues/${id}`, { params });
  },

  createQueue: (data: CreateQueueRequest): Promise<Queue> => {
    return axiosInstance.post(`queues`, data);
  },

  updateQueue: ({ id, ...data }: UpdateQueueRequest): Promise<Queue> => {
    return axiosInstance.put(`queues/${id}`, data);
  },

  deleteQueue: ({ id }: DeleteQueueRequest): Promise<null> => {
    return axiosInstance.delete(`queues/${id}`);
  },
};

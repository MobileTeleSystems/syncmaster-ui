import { PaginationRequest } from '@shared/types';

export interface Queue {
  id: number;
  group_id: number;
  name: string;
  description: string;
}

export interface GetQueuesRequest extends PaginationRequest {
  group_id: number | string;
}

export interface GetQueueRequest {
  id: number | string;
}

export interface CreateQueueRequest {
  group_id: number | string;
  name: string;
  description: string;
}

export interface UpdateQueueRequest {
  id: number | string;
  name: string;
  description: string;
}

export interface DeleteQueueRequest {
  id: number | string;
}

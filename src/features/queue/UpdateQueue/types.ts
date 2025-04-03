import { GroupData } from '@entities/group';
import { Queue, UpdateQueueRequest } from '@entities/queue';

export interface UpdateQueueForm extends Omit<UpdateQueueRequest, 'id'> {
  // Slug is shown, but cannot be changed by user
  slug: string;
}

export interface UpdateQueueProps {
  queue: Queue;
  group: GroupData;
}

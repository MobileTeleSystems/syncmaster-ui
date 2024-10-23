import { Group } from '@entities/group';
import { Queue, UpdateQueueRequest } from '@entities/queue';

export interface UpdateQueueForm extends Omit<UpdateQueueRequest, 'id'> {}

export interface UpdateQueueProps {
  queue: Queue;
  group: Group;
}

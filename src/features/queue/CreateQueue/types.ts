import { Group } from '@entities/group';
import { CreateQueueRequest } from '@entities/queue';

export interface CreateQueueForm extends Omit<CreateQueueRequest, 'group_id'> {}

export interface CreateQueueProps {
  group: Group;
}

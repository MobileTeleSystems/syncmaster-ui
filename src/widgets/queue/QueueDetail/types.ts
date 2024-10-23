import { Group } from '@entities/group';
import { Queue } from '@entities/queue';

export interface QueueDetailProps {
  queue: Queue;
  group: Group;
}

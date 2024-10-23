import { Group } from '@entities/group';
import { Queue } from '@entities/queue';

export interface QueueListProps {
  group: Group;
  onUpdateRowClick: (group: Queue) => void;
  onDeleteRowClick: (group: Queue) => void;
}

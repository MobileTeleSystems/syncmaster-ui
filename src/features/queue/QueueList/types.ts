import { GroupFromList } from '@entities/group';
import { Queue } from '@entities/queue';

export interface QueueListProps {
  group: GroupFromList;
  onUpdateRowClick: (group: Queue) => void;
  onDeleteRowClick: (group: Queue) => void;
}

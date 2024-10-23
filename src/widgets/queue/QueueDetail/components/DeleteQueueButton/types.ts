import { Queue } from '@entities/queue';
import { UserRole } from '@shared/types';

export interface DeleteQueueButtonProps {
  queue: Queue;
  groupUserRole: keyof typeof UserRole;
}

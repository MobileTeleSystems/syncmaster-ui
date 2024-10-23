import { UserRole } from '@shared/types';

export interface UpdateQueueButtonProps {
  queueId: number;
  groupUserRole: keyof typeof UserRole;
}

import { Queue } from '@entities/queue';

export interface DeleteQueueProps {
  queue: Queue;
  onSuccess: () => void;
  onCancel: () => void;
}

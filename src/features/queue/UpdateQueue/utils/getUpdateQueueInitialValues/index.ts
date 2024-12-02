import { Queue } from '@entities/queue';

import { UpdateQueueForm } from '../../types';

/* Util for preparing initial values for update queue form */
export const getUpdateQueueInitialValues = (queue: Queue): UpdateQueueForm => {
  return {
    name: queue.name,
    description: queue.description,
  };
};

import { Queue } from '@entities/queue';

import { UpdateQueueForm } from '../../types';

export const getUpdateQueueInitialValues = (queue: Queue): UpdateQueueForm => {
  return {
    name: queue.name,
    description: queue.description,
  };
};

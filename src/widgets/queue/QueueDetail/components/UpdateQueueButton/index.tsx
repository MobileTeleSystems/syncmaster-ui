import React from 'react';
import { ActionButton } from '@shared/ui';

import { UpdateQueueButtonProps } from './types';

export const UpdateQueueButton = ({ queueId }: UpdateQueueButtonProps) => {
  return <ActionButton actionType="edit" to={`/queues/${queueId}/update`} />;
};

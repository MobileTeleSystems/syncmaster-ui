import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { UpdateQueueButtonProps } from './types';

export const UpdateQueueButton = ({ queueId }: UpdateQueueButtonProps) => {
  return (
    <Button type="primary" size="large">
      <Link to={`/queues/${queueId}/update`}>Update Queue</Link>
    </Button>
  );
};

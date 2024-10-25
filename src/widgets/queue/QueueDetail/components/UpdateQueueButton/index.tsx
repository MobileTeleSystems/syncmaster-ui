import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { hasAccessByUserRole } from '@shared/utils';
import { UserRole } from '@shared/types';

import { UpdateQueueButtonProps } from './types';

export const UpdateQueueButton = ({ queueId, groupUserRole }: UpdateQueueButtonProps) => {
  if (!hasAccessByUserRole(UserRole.Maintainer, groupUserRole)) {
    return null;
  }

  return (
    <Button type="primary" size="large">
      <Link to={`/queues/${queueId}/update`}>Update queue</Link>
    </Button>
  );
};

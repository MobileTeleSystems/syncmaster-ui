import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { UpdateQueueButtonProps } from './types';

export const UpdateQueueButton = ({ queueId }: UpdateQueueButtonProps) => {
  const { t } = useTranslation('queue');

  return (
    <Button type="primary" size="large">
      <Link to={`/queues/${queueId}/update`}>{t('updateQueue')}</Link>
    </Button>
  );
};

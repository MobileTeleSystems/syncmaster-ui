import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { useDeleteQueue } from '@entities/queue/api/hooks/useDeleteQueue';

import classes from './styles.module.less';
import { DeleteQueueProps } from './types';

const { Text } = Typography;

export const DeleteQueue = ({ queue, onSuccess, onCancel }: DeleteQueueProps) => {
  const { mutate: deleteQueue, isPending } = useDeleteQueue({ id: queue.id });

  const handleSubmit = () => {
    deleteQueue(null, { onSuccess });
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <WarningOutlined className={classes.icon} />
        <Text>
          Do you really want to delete queue <b>«{queue.name}»</b>?
        </Text>
      </div>
      <ControlButtons isLoading={isPending} submitButtonText="Confirm" onSubmit={handleSubmit} onCancel={onCancel} />
    </div>
  );
};

import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { useDeleteQueue } from '@entities/queue';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';
import { DeleteQueueProps } from './types';

const { Text } = Typography;

export const DeleteQueue = ({ queue, onSuccess, onCancel }: DeleteQueueProps) => {
  const { t } = useTranslation('queue');
  const { mutate: deleteQueue, isPending } = useDeleteQueue({ id: queue.id });

  const handleSubmit = () => {
    deleteQueue(null, { onSuccess });
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <WarningOutlined className={classes.icon} />
        <Text>
          {t('deleteQueueConfirm')} <b>«{queue.name}»</b>?
        </Text>
      </div>
      <ControlButtons
        isLoading={isPending}
        submitButtonText={t('confirm', { ns: 'shared' })}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    </div>
  );
};

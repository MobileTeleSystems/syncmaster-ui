import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { useDeleteConnection } from '@entities/connection';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';
import { DeleteConnectionProps } from './types';

const { Text } = Typography;

export const DeleteConnection = ({ connection, onSuccess, onCancel }: DeleteConnectionProps) => {
  const { t } = useTranslation('connection');
  const { mutate: deleteConnection, isPending } = useDeleteConnection({ id: connection.id });

  const handleSubmit = () => {
    deleteConnection(null, { onSuccess });
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <WarningOutlined className={classes.icon} />
        <Text>
          {t('deleteConnectionConfirm')} <b>«{connection.name}»</b>?
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

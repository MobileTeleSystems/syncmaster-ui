import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { useDeleteConnection } from '@entities/connection';

import classes from './styles.module.less';
import { DeleteConnectionProps } from './types';

const { Text } = Typography;

export const DeleteConnection = ({ connection, onSuccess, onCancel }: DeleteConnectionProps) => {
  const { mutate: deleteConnection, isPending } = useDeleteConnection({ id: connection.id });

  const handleSubmit = () => {
    deleteConnection(null, { onSuccess });
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <WarningOutlined className={classes.icon} />
        <Text>
          Do you really want to delete connection <b>«{connection.name}»</b>?
        </Text>
      </div>
      <ControlButtons isLoading={isPending} submitButtonText="Confirm" onSubmit={handleSubmit} onCancel={onCancel} />
    </div>
  );
};

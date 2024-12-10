import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { useCreateRun } from '@entities/run';

import classes from './styles.module.less';
import { CreateRunProps } from './types';

const { Text } = Typography;

export const CreateRun = ({ transferId, transferName, onSuccess, onCancel }: CreateRunProps) => {
  const { mutate: createRun, isPending } = useCreateRun({ transfer_id: transferId });

  const handleSubmit = () => {
    createRun(null, { onSuccess });
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <WarningOutlined className={classes.icon} />
        <Text>
          Do you really want to run transfer <b>«{transferName}»</b>?
        </Text>
      </div>
      <ControlButtons isLoading={isPending} submitButtonText="Confirm" onSubmit={handleSubmit} onCancel={onCancel} />
    </div>
  );
};

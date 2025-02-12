import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';

import { TransferCanvasTransformNodeTypeName } from '../../../TransferConnectionsCanvas';

import { DeleteNodeProps } from './types';
import classes from './styles.module.less';

const { Text } = Typography;

export const DeleteNode = ({ nodeType, onConfirm, onCancel }: DeleteNodeProps) => {
  const handleConfirm = () => {
    onConfirm(nodeType);
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <WarningOutlined className={classes.icon} />
        <Text>
          Do you really want to delete <b>{TransferCanvasTransformNodeTypeName[nodeType]}</b>?
        </Text>
      </div>
      <ControlButtons submitButtonText="Confirm" onSubmit={handleConfirm} onCancel={onCancel} />
    </div>
  );
};

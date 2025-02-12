import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';

import { TransferCanvasTransformNodeTypeName } from '../../../TransferConnectionsCanvas';

import { TransformButtonItemProps } from './types';

export const TransformButtonItem = ({ isExist, nodeType, onAddNode, onDeleteNode }: TransformButtonItemProps) => {
  if (isExist) {
    return (
      <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => onDeleteNode(nodeType)}>
        Remove {TransferCanvasTransformNodeTypeName[nodeType]}
      </Button>
    );
  }

  return (
    <Button type="primary" icon={<PlusCircleOutlined />} onClick={() => onAddNode(nodeType)}>
      Add {TransferCanvasTransformNodeTypeName[nodeType]}
    </Button>
  );
};

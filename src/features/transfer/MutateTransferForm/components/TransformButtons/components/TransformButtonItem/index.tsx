import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY } from '../../../TransferConnectionsCanvas';

import { TransformButtonItemProps } from './types';

export const TransformButtonItem = ({ isExist, nodeType, onAddNode, onDeleteNode }: TransformButtonItemProps) => {
  const { t } = useTranslation('transformation');

  if (isExist) {
    return (
      <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => onDeleteNode(nodeType)}>
        {t('remove', { ns: 'shared' })} {t(TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY[nodeType])}
      </Button>
    );
  }

  return (
    <Button type="primary" icon={<PlusCircleOutlined />} onClick={() => onAddNode(nodeType)}>
      {t('add', { ns: 'shared' })} {t(TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY[nodeType])}
    </Button>
  );
};

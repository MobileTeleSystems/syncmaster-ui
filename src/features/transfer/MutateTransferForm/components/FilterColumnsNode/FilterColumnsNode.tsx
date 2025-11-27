import React, { useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { FilterOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import {
  TransferCanvasEdge,
  TransferCanvasTransformNodeType,
  TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY,
} from '../TransferConnectionsCanvas';
import { FilterColumnsFormItem } from '../FilterColumnsFormItem';

import classes from './styles.module.less';

export const FilterColumnsNode = () => {
  const { t } = useTranslation('transformation');

  const icon = useMemo(() => {
    return <FilterOutlined />;
  }, []);

  const children = useMemo(() => {
    return (
      <>
        <Handle type="target" position={Position.Left} id={TransferCanvasEdge.FILTER_COLUMNS_TARGET} />
        <FilterColumnsFormItem />
        <Handle type="source" position={Position.Right} id={TransferCanvasEdge.FILTER_COLUMNS_SOURCE} />
      </>
    );
  }, []);

  return (
    <CanvasNode
      className={classes.root}
      title={t(TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY[TransferCanvasTransformNodeType.FILTER_COLUMNS])}
      icon={icon}
    >
      {children}
    </CanvasNode>
  );
};

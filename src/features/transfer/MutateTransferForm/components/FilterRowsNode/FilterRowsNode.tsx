import React, { useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { FilterOutlined } from '@ant-design/icons';
import { TransformationForm, TransformationType } from '@entities/transformation';
import { useTranslation } from 'react-i18next';

import {
  TransferCanvasEdge,
  TransferCanvasTransformNodeType,
  TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY,
} from '../TransferConnectionsCanvas';

import classes from './styles.module.less';

export const FilterRowsNode = () => {
  const { t } = useTranslation('transformation');

  const icon = useMemo(() => {
    return <FilterOutlined />;
  }, []);

  const children = useMemo(() => {
    return (
      <>
        <Handle type="target" position={Position.Left} id={TransferCanvasEdge.FILTER_ROWS_TARGET} />
        <TransformationForm
          transformationType={TransformationType.FILTER_ROWS}
          nestedTypeSelectLabel={t('operator')}
          hasColumnField
        />
        <Handle type="source" position={Position.Right} id={TransferCanvasEdge.FILTER_ROWS_SOURCE} />
      </>
    );
  }, [t]);

  return (
    <CanvasNode
      className={classes.root}
      title={t(TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY[TransferCanvasTransformNodeType.FILTER_ROWS])}
      icon={icon}
    >
      {children}
    </CanvasNode>
  );
};

import React, { useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { FilterOutlined } from '@ant-design/icons';
import { TransformationForm, TransformationType } from '@entities/transformation';

import {
  TransferCanvasEdge,
  TransferCanvasTransformNodeType,
  TransferCanvasTransformNodeTypeName,
} from '../TransferConnectionsCanvas';

import { FilterRowsNodeProps } from './types';
import classes from './styles.module.less';

export const FilterRowsNode = ({}: FilterRowsNodeProps) => {
  const icon = useMemo(() => {
    return <FilterOutlined />;
  }, []);

  const children = useMemo(() => {
    return (
      <>
        <Handle type="target" position={Position.Left} id={TransferCanvasEdge.FILTER_ROWS_TARGET} />
        <TransformationForm
          transformationType={TransformationType.FILTER_ROWS}
          nestedTypeSelectLabel="Operator"
          hasColumnField
        />
        <Handle type="source" position={Position.Right} id={TransferCanvasEdge.FILTER_ROWS_SOURCE} />
      </>
    );
  }, []);

  return (
    <CanvasNode
      className={classes.root}
      title={TransferCanvasTransformNodeTypeName[TransferCanvasTransformNodeType.FILTER_ROWS]}
      icon={icon}
    >
      {children}
    </CanvasNode>
  );
};

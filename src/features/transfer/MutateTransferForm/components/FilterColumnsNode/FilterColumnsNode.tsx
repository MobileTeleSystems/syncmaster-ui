import React, { useCallback, useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { FilterOutlined } from '@ant-design/icons';
import {
  FilterColumnsValue,
  RenderValueParams,
  TransformationForm,
  TransformationType,
} from '@entities/transformation';

import {
  TransferCanvasEdge,
  TransferCanvasTransformNodeType,
  TransferCanvasTransformNodeTypeName,
} from '../TransferConnectionsCanvas';

import { FilterColumnsNodeProps } from './types';
import classes from './styles.module.less';

export const FilterColumnsNode = ({}: FilterColumnsNodeProps) => {
  const icon = useMemo(() => {
    return <FilterOutlined />;
  }, []);

  const getFilterColumnsValueForm = useCallback((params: RenderValueParams<TransformationType.FILTER_COLUMNS>) => {
    return <FilterColumnsValue type={params.type} name={params.name} />;
  }, []);

  const children = useMemo(() => {
    return (
      <>
        <Handle type="target" position={Position.Left} id={TransferCanvasEdge.FILTER_COLUMNS_TARGET} />
        <TransformationForm
          transformationType={TransformationType.FILTER_COLUMNS}
          nestedTypeSelectLabel="Type"
          hasColumnField
          renderValue={getFilterColumnsValueForm}
        />
        <Handle type="source" position={Position.Right} id={TransferCanvasEdge.FILTER_COLUMNS_SOURCE} />
      </>
    );
  }, [getFilterColumnsValueForm]);

  return (
    <CanvasNode
      className={classes.root}
      title={TransferCanvasTransformNodeTypeName[TransferCanvasTransformNodeType.FILTER_COLUMNS]}
      icon={icon}
    >
      {children}
    </CanvasNode>
  );
};

import React, { useCallback, useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { FilterOutlined } from '@ant-design/icons';
import { FilterFileValue, RenderValueParams, TransformationForm, TransformationType } from '@entities/transformation';

import {
  TransferCanvasEdge,
  TransferCanvasTransformNodeType,
  TransferCanvasTransformNodeTypeName,
} from '../TransferConnectionsCanvas';

import { FilterFileNodeProps } from './types';
import classes from './styles.module.less';

export const FilterFileNode = ({}: FilterFileNodeProps) => {
  const icon = useMemo(() => {
    return <FilterOutlined />;
  }, []);

  const getFilterFileValueForm = useCallback((params: RenderValueParams<TransformationType.FILTER_FILE>) => {
    return <FilterFileValue type={params.type} name={params.name} />;
  }, []);

  const children = useMemo(() => {
    return (
      <>
        <Handle type="target" position={Position.Left} id={TransferCanvasEdge.FILTER_FILE_TARGET} />
        <TransformationForm
          transformationType={TransformationType.FILTER_FILE}
          nestedTypeSelectLabel="Type"
          renderValue={getFilterFileValueForm}
        />
        <Handle type="source" position={Position.Right} id={TransferCanvasEdge.FILTER_FILE_SOURCE} />
      </>
    );
  }, [getFilterFileValueForm]);

  return (
    <CanvasNode
      className={classes.root}
      title={TransferCanvasTransformNodeTypeName[TransferCanvasTransformNodeType.FILTER_FILE]}
      icon={icon}
    >
      {children}
    </CanvasNode>
  );
};

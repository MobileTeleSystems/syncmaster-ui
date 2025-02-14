import React, { useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { FilterOutlined } from '@ant-design/icons';
import { FilterRows } from '@entities/transformation';

import { TransferCanvasEdge } from '../TransferConnectionsCanvas';

import { FilterRowsNodeProps } from './types';
import classes from './styles.module.less';

export const FilterRowsNode = ({}: FilterRowsNodeProps) => {
  const icon = useMemo(() => {
    return <FilterOutlined />;
  }, []);

  const children = useMemo(() => {
    return (
      <>
        <Handle type="target" position={Position.Left} id={TransferCanvasEdge.ROWS_FILTER_TARGET} />
        <FilterRows />
        <Handle type="source" position={Position.Right} id={TransferCanvasEdge.ROWS_FILTER_SOURCE} />
      </>
    );
  }, []);

  return (
    <CanvasNode className={classes.root} title="Filter rows" icon={icon}>
      {children}
    </CanvasNode>
  );
};

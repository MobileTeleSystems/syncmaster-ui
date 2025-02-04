import React, { useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { FilterOutlined } from '@ant-design/icons';

import { FilterRows } from '../FilterRows';
import { TransferCanvasEdge } from '../TransferConnectionsCanvas';

import { FilterRowsNodeProps } from './types';

export const FilterRowsNode = ({}: FilterRowsNodeProps) => {
  const icon = useMemo(() => {
    return <FilterOutlined />;
  }, []);

  const children = useMemo(() => {
    return (
      <>
        <Handle type="target" position={Position.Left} id={TransferCanvasEdge.FILTER_ROWS_TARGET} />
        <FilterRows />
        <Handle type="source" position={Position.Right} id={TransferCanvasEdge.FILTER_ROWS_SOURCE} />
      </>
    );
  }, []);

  return (
    <CanvasNode title="Filter rows" icon={icon}>
      {children}
    </CanvasNode>
  );
};

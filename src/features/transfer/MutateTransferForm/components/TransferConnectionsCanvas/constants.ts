import { Edge, NodeTypes } from '@xyflow/react';

import { SourceParamsNode } from '../SourceParamsNode';
import { TargetParamsNode } from '../TargetParamsNode';
import { FilterRowsNode } from '../FilterRowsNode';

import { TransferCanvasDefaultNodeType, TransferCanvasTransformNodeType } from './types';

export const INITIAL_EDGES: Edge[] = [
  {
    id: 'edge-1',
    source: TransferCanvasDefaultNodeType.SOURCE,
    target: TransferCanvasDefaultNodeType.TARGET,
    animated: true,
  },
];

export const NODE_TYPES: NodeTypes = {
  [TransferCanvasDefaultNodeType.SOURCE]: SourceParamsNode,
  [TransferCanvasDefaultNodeType.TARGET]: TargetParamsNode,
  [TransferCanvasTransformNodeType.FILTER_ROWS]: FilterRowsNode,
};

import { Edge, NodeTypes } from '@xyflow/react';

import { SourceParamsNode } from '../SourceParamsNode';
import { TargetParamsNode } from '../TargetParamsNode';

import { TransferCanvasNode } from './types';

export const INITIAL_EDGES: Edge[] = [
  {
    id: 'edge-1',
    source: TransferCanvasNode.SOURCE,
    target: TransferCanvasNode.TARGET,
    animated: true,
  },
];

export const NODE_TYPES: NodeTypes = {
  [TransferCanvasNode.SOURCE]: SourceParamsNode,
  [TransferCanvasNode.TARGET]: TargetParamsNode,
};

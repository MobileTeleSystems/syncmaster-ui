import { NodeTypes } from '@xyflow/react';

import { SourceParamsNode } from '../SourceParamsNode';
import { TargetParamsNode } from '../TargetParamsNode';
import { FilterRowsNode } from '../FilterRowsNode';

import { TransferCanvasDefaultNodeType, TransferCanvasTransformNodeType } from './types';

export const NODE_TYPES: NodeTypes = {
  [TransferCanvasDefaultNodeType.SOURCE]: SourceParamsNode,
  [TransferCanvasDefaultNodeType.TARGET]: TargetParamsNode,
  [TransferCanvasTransformNodeType.ROWS_FILTER]: FilterRowsNode,
};

export const NODE_POSITION_X_GAP_DEFAULT = 500;
export const NODE_POSITION_X_GAP_LARGE = 1000;

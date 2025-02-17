import { NodeTypes } from '@xyflow/react';

import { SourceParamsNode } from '../SourceParamsNode';
import { TargetParamsNode } from '../TargetParamsNode';
import { FilterRowsNode } from '../FilterRowsNode';
import { FilterColumnsNode } from '../FilterColumnsNode';

import { TransferCanvasDefaultNodeType, TransferCanvasEdgeType, TransferCanvasTransformNodeType } from './types';

export const NODE_TYPES: NodeTypes = {
  [TransferCanvasDefaultNodeType.SOURCE]: SourceParamsNode,
  [TransferCanvasDefaultNodeType.TARGET]: TargetParamsNode,
  [TransferCanvasTransformNodeType.FILTER_ROWS]: FilterRowsNode,
  [TransferCanvasTransformNodeType.FILTER_COLUMNS]: FilterColumnsNode,
};

export const NODE_TYPES_ID = {
  [TransferCanvasDefaultNodeType.SOURCE]: '1',
  [TransferCanvasTransformNodeType.FILTER_ROWS]: '2',
  [TransferCanvasTransformNodeType.FILTER_COLUMNS]: '3',
  [TransferCanvasDefaultNodeType.TARGET]: '5',
};

export const EDGE_TYPES_ID = {
  [TransferCanvasEdgeType.SOURCE]: '1',
  [TransferCanvasEdgeType.FILTER_ROWS]: '2',
  [TransferCanvasEdgeType.FILTER_COLUMNS]: '3',
  [TransferCanvasEdgeType.TARGET]: '5',
};

export const NODE_POSITION_X_GAP_DEFAULT = 500;
export const NODE_POSITION_X_GAP_LARGE = 1000;

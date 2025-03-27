import { NodeTypes } from '@xyflow/react';

import { SourceParamsNode } from '../SourceParamsNode';
import { TargetParamsNode } from '../TargetParamsNode';
import { FilterRowsNode } from '../FilterRowsNode';
import { FilterColumnsNode } from '../FilterColumnsNode';
import { FilterFileNode } from '../FilterFileNode';

import { TransferCanvasDefaultNodeType, TransferCanvasEdgeType, TransferCanvasTransformNodeType } from './types';

export const NODE_TYPES: NodeTypes = {
  [TransferCanvasDefaultNodeType.SOURCE]: SourceParamsNode,
  [TransferCanvasDefaultNodeType.TARGET]: TargetParamsNode,
  [TransferCanvasTransformNodeType.FILTER_ROWS]: FilterRowsNode,
  [TransferCanvasTransformNodeType.FILTER_COLUMNS]: FilterColumnsNode,
  [TransferCanvasTransformNodeType.FILTER_FILE]: FilterFileNode,
};

export const NODE_TYPES_ID = {
  [TransferCanvasDefaultNodeType.SOURCE]: '1',
  [TransferCanvasTransformNodeType.FILTER_ROWS]: '2',
  [TransferCanvasTransformNodeType.FILTER_COLUMNS]: '3',
  [TransferCanvasTransformNodeType.FILTER_FILE]: '4',
  [TransferCanvasDefaultNodeType.TARGET]: '5',
};

export const EDGE_TYPES_ID = {
  [TransferCanvasEdgeType.SOURCE]: '1',
  [TransferCanvasEdgeType.FILTER_ROWS]: '2',
  [TransferCanvasEdgeType.FILTER_COLUMNS]: '3',
  [TransferCanvasEdgeType.FILTER_FILE]: '4',
  [TransferCanvasEdgeType.TARGET]: '5',
};

export const NODE_POSITION_X_GAP_DEFAULT = 500;
export const NODE_POSITION_X_GAP_LARGE = 1000;

export const TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY = {
  [TransferCanvasTransformNodeType.FILTER_ROWS]: 'filterRows',
  [TransferCanvasTransformNodeType.FILTER_COLUMNS]: 'filterColumns',
  [TransferCanvasTransformNodeType.FILTER_FILE]: 'filterFile',
} as const;

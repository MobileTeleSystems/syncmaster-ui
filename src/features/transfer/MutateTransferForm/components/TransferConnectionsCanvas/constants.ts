import { NodeTypes } from '@xyflow/react';
import { TransformationType } from '@entities/transformation';

import { SourceParamsNode } from '../SourceParamsNode';
import { TargetParamsNode } from '../TargetParamsNode';
import { FilterRowsNode } from '../FilterRowsNode';
import { FilterColumnsNode } from '../FilterColumnsNode';
import { FilterFileNode } from '../FilterFileNode';

import { TransferCanvasDefaultNodeType, TransferCanvasEdgeType, TransferCanvasTransformNodeType } from './types';

export const NODE_TYPES: NodeTypes = {
  [TransferCanvasDefaultNodeType.SOURCE]: SourceParamsNode,
  [TransferCanvasDefaultNodeType.TARGET]: TargetParamsNode,
  [TransferCanvasTransformNodeType.FILTER_FILE]: FilterFileNode,
  [TransferCanvasTransformNodeType.FILTER_ROWS]: FilterRowsNode,
  [TransferCanvasTransformNodeType.FILTER_COLUMNS]: FilterColumnsNode,
};

export const NODE_TYPES_ID = {
  [TransferCanvasDefaultNodeType.SOURCE]: '1',
  [TransferCanvasTransformNodeType.FILTER_FILE]: '2',
  [TransferCanvasTransformNodeType.FILTER_ROWS]: '3',
  [TransferCanvasTransformNodeType.FILTER_COLUMNS]: '4',
  [TransferCanvasDefaultNodeType.TARGET]: '5',
};

export const EDGE_TYPES_ID = {
  [TransferCanvasEdgeType.SOURCE]: '1',
  [TransferCanvasEdgeType.FILTER_FILE]: '2',
  [TransferCanvasEdgeType.FILTER_ROWS]: '3',
  [TransferCanvasEdgeType.FILTER_COLUMNS]: '4',
  [TransferCanvasEdgeType.TARGET]: '5',
};

export const NODE_POSITION_X_GAP_DEFAULT = 500;
export const NODE_POSITION_X_GAP_LARGE = 1000;

export const TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY = {
  [TransferCanvasTransformNodeType.FILTER_FILE]: 'filterFile',
  [TransferCanvasTransformNodeType.FILTER_ROWS]: 'filterRows',
  [TransferCanvasTransformNodeType.FILTER_COLUMNS]: 'filterColumns',
} as const;

export const TRANSFER_CANVAS_NODE_TYPE_TO_TRANSFORM_TYPE_MAP: Record<
  TransferCanvasTransformNodeType,
  TransformationType
> = {
  [TransferCanvasTransformNodeType.FILTER_FILE]: TransformationType.FILTER_FILE,
  [TransferCanvasTransformNodeType.FILTER_ROWS]: TransformationType.FILTER_ROWS,
  [TransferCanvasTransformNodeType.FILTER_COLUMNS]: TransformationType.FILTER_COLUMNS,
} as const;

export const TRANSFER_TRANSFORM_TYPE_TO_CANVAS_NODE_TYPE_MAP: Record<
  TransformationType,
  TransferCanvasTransformNodeType
> = {
  [TransformationType.FILTER_FILE]: TransferCanvasTransformNodeType.FILTER_FILE,
  [TransformationType.FILTER_ROWS]: TransferCanvasTransformNodeType.FILTER_ROWS,
  [TransformationType.FILTER_COLUMNS]: TransferCanvasTransformNodeType.FILTER_COLUMNS,
} as const;

export const TRANSFER_CANVAS_FILTER_NODES = Object.values(
  TransferCanvasTransformNodeType,
) as TransferCanvasTransformNodeType[];

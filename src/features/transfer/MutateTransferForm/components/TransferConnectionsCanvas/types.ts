import { FilterColumnsNodeData } from '../FilterColumnsNode';
import { FilterRowsNodeData } from '../FilterRowsNode';
import { SourceParamsNodeData } from '../SourceParamsNode';
import { TargetParamsNodeData } from '../TargetParamsNode';

import { GetInitialNodesProps } from './utils';

export interface TransferCanvasProps extends Pick<GetInitialNodesProps, 'groupId'> {}

export type TransferCanvasNodeData =
  | SourceParamsNodeData
  | TargetParamsNodeData
  | FilterRowsNodeData
  | FilterColumnsNodeData;

export enum TransferCanvasDefaultNodeType {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
}

export enum TransferCanvasTransformNodeType {
  FILTER_ROWS = 'FILTER_ROWS',
  FILTER_COLUMNS = 'FILTER_COLUMNS',
}

export const TransferCanvasTransformNodeTypeName = {
  [TransferCanvasTransformNodeType.FILTER_ROWS]: 'Filter rows',
  [TransferCanvasTransformNodeType.FILTER_COLUMNS]: 'Filter columns',
} as const;

export enum TransferCanvasEdgeType {
  SOURCE = 'SOURCE',
  FILTER_ROWS = 'FILTER_ROWS',
  FILTER_COLUMNS = 'FILTER_COLUMNS',
  TARGET = 'TARGET',
}

export enum TransferCanvasEdge {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
  FILTER_ROWS_SOURCE = 'FILTER_ROWS_SOURCE',
  FILTER_ROWS_TARGET = 'FILTER_ROWS_TARGET',
  FILTER_COLUMNS_SOURCE = 'FILTER_COLUMNS_SOURCE',
  FILTER_COLUMNS_TARGET = 'FILTER_COLUMNS_TARGET',
}

import { FilterRowsNodeData } from '../FilterRowsNode';
import { SourceParamsNodeData } from '../SourceParamsNode';
import { TargetParamsNodeData } from '../TargetParamsNode';

import { GetInitialNodesProps } from './utils';

export interface TransferCanvasProps extends Pick<GetInitialNodesProps, 'groupId'> {}

export type TransferCanvasNodeData = SourceParamsNodeData | TargetParamsNodeData | FilterRowsNodeData;

export enum TransferCanvasDefaultNodeType {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
}

export enum TransferCanvasTransformNodeType {
  ROWS_FILTER = 'ROWS_FILTER',
}

export const TransferCanvasTransformNodeTypeName = {
  [TransferCanvasTransformNodeType.ROWS_FILTER]: 'Filter rows',
} as const;

export enum TransferCanvasEdge {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
  ROWS_FILTER_SOURCE = 'ROWS_FILTER_SOURCE',
  ROWS_FILTER_TARGET = 'ROWS_FILTER_TARGET',
}

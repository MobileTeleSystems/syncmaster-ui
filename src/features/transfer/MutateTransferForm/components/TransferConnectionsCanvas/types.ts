import { FilterRowsNodeData } from '../FilterRowsNode';
import { SourceParamsNodeData } from '../SourceParamsNode';
import { TargetParamsNodeData } from '../TargetParamsNode';

import { GetInitialNodesProps } from './utils';

export interface TransferCanvasProps extends GetInitialNodesProps {}

export type TransferCanvasNodeData = SourceParamsNodeData | TargetParamsNodeData | FilterRowsNodeData;

export enum TransferCanvasDefaultNodeType {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
}

export enum TransferCanvasTransformNodeType {
  FILTER_ROWS = 'FILTER_ROWS',
}

export enum TransferCanvasEdge {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
  FILTER_ROWS_SOURCE = 'FILTER_ROWS_SOURCE',
  FILTER_ROWS_TARGET = 'FILTER_ROWS_TARGET',
}

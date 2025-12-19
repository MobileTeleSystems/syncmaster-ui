import { FilterColumnsNodeData } from '../FilterColumnsNode';
import { FilterFileNodeData } from '../FilterFileNode';
import { FilterRowsNodeData } from '../FilterRowsNode';
import { SourceParamsNodeData } from '../SourceParamsNode';
import { TargetParamsNodeData } from '../TargetParamsNode';

import { GetInitialNodesProps } from './utils';

export interface TransferCanvasProps extends Pick<GetInitialNodesProps, 'groupId'> {
  isDisplayedButtons?: boolean;
}

export type TransferCanvasNodeData =
  | SourceParamsNodeData
  | TargetParamsNodeData
  | FilterRowsNodeData
  | FilterColumnsNodeData
  | FilterFileNodeData;

export enum TransferCanvasDefaultNodeType {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
}

export enum TransferCanvasTransformNodeType {
  FILTER_FILE = 'FILTER_FILE',
  FILTER_ROWS = 'FILTER_ROWS',
  FILTER_COLUMNS = 'FILTER_COLUMNS',
}

export enum TransferCanvasEdgeType {
  SOURCE = 'SOURCE',
  FILTER_FILE = 'FILTER_FILE',
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
  FILTER_FILE_SOURCE = 'FILTER_FILE_SOURCE',
  FILTER_FILE_TARGET = 'FILTER_FILE_TARGET',
}

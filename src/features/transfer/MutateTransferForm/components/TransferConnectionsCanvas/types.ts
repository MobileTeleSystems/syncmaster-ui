import { SourceParamsNodeData } from '../SourceParamsNode';
import { TargetParamsNodeData } from '../TargetParamsNode';

import { GetInitialNodesProps } from './utils';

export interface TransferCanvasProps extends GetInitialNodesProps {}

export type TransferCanvasNodeData = SourceParamsNodeData | TargetParamsNodeData;

export enum TransferCanvasNode {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
}

export enum TransferCanvasEdge {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
}

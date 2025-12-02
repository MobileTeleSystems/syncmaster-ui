import { Node } from '@xyflow/react';

import { TransferCanvasTransformNodeType } from '../TransferConnectionsCanvas';

export interface FilterColumnsNodeData extends Node<
  Record<string, unknown>,
  TransferCanvasTransformNodeType.FILTER_COLUMNS
> {}

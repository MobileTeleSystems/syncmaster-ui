import { Node } from '@xyflow/react';

import { TransferCanvasTransformNodeType } from '../TransferConnectionsCanvas';

export interface FilterRowsNodeData
  extends Node<Record<string, unknown>, TransferCanvasTransformNodeType.FILTER_ROWS> {}

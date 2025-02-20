import { Node, NodeProps } from '@xyflow/react';

import { TransferCanvasTransformNodeType } from '../TransferConnectionsCanvas';

export interface FilterFileNodeData
  extends Node<Record<string, unknown>, TransferCanvasTransformNodeType.FILTER_FILE> {}

export interface FilterFileNodeProps extends NodeProps<FilterFileNodeData> {}

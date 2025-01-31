import { Node, NodeProps } from '@xyflow/react';

import { SourceParamsProps } from '../SourceParams';
import { TransferCanvasNode } from '../TransferConnectionsCanvas';

export interface SourceParamsNodeData extends Node<SourceParamsProps, TransferCanvasNode.SOURCE> {}

export interface SourceParamsNodeProps extends NodeProps<SourceParamsNodeData> {}

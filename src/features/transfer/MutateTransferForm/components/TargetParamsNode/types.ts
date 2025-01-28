import { Node, NodeProps } from '@xyflow/react';

import { TargetParamsProps } from '../TargetParams';
import { TransferCanvasNode } from '../TransferConnectionsCanvas';

export interface TargetParamsNodeData extends Node<TargetParamsProps, TransferCanvasNode.TARGET> {}

export interface TargetParamsNodeProps extends NodeProps<TargetParamsNodeData> {}

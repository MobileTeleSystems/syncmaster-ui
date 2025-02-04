import { Node, NodeProps } from '@xyflow/react';

import { TargetParamsProps } from '../TargetParams';
import { TransferCanvasDefaultNodeType } from '../TransferConnectionsCanvas';

export interface TargetParamsNodeData extends Node<TargetParamsProps, TransferCanvasDefaultNodeType.TARGET> {}

export interface TargetParamsNodeProps extends NodeProps<TargetParamsNodeData> {}

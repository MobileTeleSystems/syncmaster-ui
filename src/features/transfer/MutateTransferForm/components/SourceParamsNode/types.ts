import { Node, NodeProps } from '@xyflow/react';

import { SourceParamsProps } from '../SourceParams';
import { TransferCanvasDefaultNodeType } from '../TransferConnectionsCanvas';

export interface SourceParamsNodeData extends Node<SourceParamsProps, TransferCanvasDefaultNodeType.SOURCE> {}

export interface SourceParamsNodeProps extends NodeProps<SourceParamsNodeData> {}

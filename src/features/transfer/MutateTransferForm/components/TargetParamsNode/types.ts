import { Node, NodeProps } from '@xyflow/react';

import { TargetParamsProps } from '../TargetParams';

//TODO: [DOP-22354] change 'targetParams' to NodeType.TARGET
export interface TargetParamsNodeData extends Node<TargetParamsProps, 'targetParams'> {}

export interface TargetParamsNodeProps extends NodeProps<TargetParamsNodeData> {}

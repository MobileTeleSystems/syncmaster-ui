import { Node, NodeProps } from '@xyflow/react';

import { SourceParamsProps } from '../SourceParams';

//TODO: [DOP-22354] change 'sourceParams' to NodeType.SOURCE
export interface SourceParamsNodeData extends Node<SourceParamsProps, 'sourceParams'> {}

export interface SourceParamsNodeProps extends NodeProps<SourceParamsNodeData> {}

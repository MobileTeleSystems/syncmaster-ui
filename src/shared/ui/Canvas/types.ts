import { Edge, Node, ReactFlowProps } from '@xyflow/react';

export interface CanvasProps<N extends Node, E extends Edge>
  extends Omit<ReactFlowProps<N, E>, 'nodes' | 'edges' | 'onNodesChange' | 'onEdgesChange'> {
  initialNodes: N[];
  initialEdges: E[];
}

import { Edge } from '@xyflow/react';

import { TransferCanvasNodeData } from '../../types';

export const getInitialEdges = (nodes: TransferCanvasNodeData[]): Edge[] => {
  const edges: Edge[] = [];

  /** for instead of Array.prototype.map, because we need to skip first element */
  for (let i = 1; i < nodes.length; i++) {
    edges.push({
      id: String(i),
      source: nodes[i - 1].id,
      target: nodes[i].id,
      animated: true,
    });
  }

  return edges;
};

import { Edge } from '@xyflow/react';

import { TransferCanvasNodeData } from '../../types';

export const getInitialEdges = (nodes: TransferCanvasNodeData[]): Edge[] => {
  const edges: Edge[] = [];

  /** for instead of Array.prototype.map, because we need to skip first element */
  for (let i = 1; i < nodes.length; i++) {
    edges.push({
      id: `edge-${i}`,
      source: nodes[i - 1].type!,
      target: nodes[i].type!,
      animated: true,
    });
  }

  return edges;
};

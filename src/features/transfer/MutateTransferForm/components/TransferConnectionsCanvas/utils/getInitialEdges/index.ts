import { Edge } from '@xyflow/react';

import { TransferCanvasNodeData } from '../../types';
import { EDGE_TYPES_ID } from '../../constants';

export const getInitialEdges = (nodes: TransferCanvasNodeData[]): Edge[] => {
  const edges: Edge[] = [];

  /** for instead of Array.prototype.map, because we need to skip first element */
  for (let i = 1; i < nodes.length; i++) {
    const edgeSource = nodes[i - 1].type!;

    edges.push({
      id: EDGE_TYPES_ID[edgeSource],
      source: nodes[i - 1].id,
      target: nodes[i].id,
      animated: true,
    });
  }

  return edges;
};

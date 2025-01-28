import { useReactFlow } from '@xyflow/react';
import { useState } from 'react';

import { TransferCanvasDefaultNodeType, TransferCanvasTransformNodeType } from '../../../TransferConnectionsCanvas';

/** Hook for handling nodes and edges data (add, delete) */
export const useHandleNodes = () => {
  const [transformNodeTypes, setTransformNodeTypes] = useState<Record<TransferCanvasTransformNodeType, true>>(
    {} as Record<TransferCanvasTransformNodeType, true>,
  );
  const { getNodes, getEdges, setNodes, setEdges } = useReactFlow();

  const addNewNode = (nodeType: TransferCanvasTransformNodeType) => {
    const newNode = {
      id: nodeType,
      type: nodeType,
      position: { x: 0, y: 0 },
      data: {},
    };

    const nodes = getNodes();

    const firstNodes = nodes.slice(0, nodes.length - 1);
    const lastNode = nodes[nodes.length - 1];
    const newNodes = firstNodes.concat(newNode).concat(lastNode);

    setNodes(newNodes.map((node, index) => ({ ...node, position: { x: index * 500, y: 0 } })));
  };

  const addNewEdge = (nodeType: TransferCanvasTransformNodeType) => {
    const edges = getEdges();

    const newEdge = {
      id: `edge-${edges.length + 1}`,
      source: nodeType,
      target: TransferCanvasDefaultNodeType.TARGET,
      animated: true,
    };

    const firstEdges = edges.slice(0, edges.length - 1);
    const lastEdge = { ...edges[edges.length - 1], target: nodeType };
    const newEdges = firstEdges.concat(lastEdge).concat(newEdge);

    setEdges(newEdges);
  };

  const handleAddTransformNode = (nodeType: TransferCanvasTransformNodeType) => {
    setTransformNodeTypes((state) => ({ ...state, [nodeType]: true }));
    addNewNode(nodeType);
    addNewEdge(nodeType);
  };

  return { transformNodeTypes, handleAddTransformNode };
};

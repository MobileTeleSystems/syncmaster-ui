import { Edge, useReactFlow } from '@xyflow/react';
import { useEffect, useState } from 'react';
import { Form } from 'antd';

import {
  TransferCanvasNodeData,
  TransferCanvasTransformNodeType,
  NODE_TYPES_ID,
  TransferCanvasDefaultNodeType,
  EDGE_TYPES_ID,
} from '../../../TransferConnectionsCanvas';
import { getInitialTransformNodeTypes, getTransformationType, TransformNodeTypes } from '../../utils';
import { setNodePosition } from '../../../TransferConnectionsCanvas';

/** Hook for handling nodes and edges data (add, delete) */
export const useHandleNodes = () => {
  const { getNodes, getEdges, setNodes, setEdges } = useReactFlow<TransferCanvasNodeData>();
  const formInstance = Form.useFormInstance();

  const [transformNodeTypes, setTransformNodeTypes] = useState<TransformNodeTypes>();

  /** Set initial nodes using useEffect, because nodes state fill only after mounting */
  useEffect(() => {
    setTransformNodeTypes(getInitialTransformNodeTypes(getNodes()));
  }, [getNodes]);

  const addNewNode = (nodeType: TransferCanvasTransformNodeType) => {
    const newNode = {
      id: NODE_TYPES_ID[nodeType],
      type: nodeType,
      position: { x: 0, y: 0 },
      data: {},
    };

    const nodes = getNodes();
    const newNodes = [...nodes, newNode]
      .sort((nodeA, nodeB) => (nodeA.id > nodeB.id ? 1 : -1))
      .map((node, index) => ({ ...node, position: setNodePosition(index) }));

    setNodes(newNodes);
  };

  const addNewEdge = (nodeType: TransferCanvasTransformNodeType) => {
    const edges = getEdges();
    const newEdgeId = EDGE_TYPES_ID[nodeType];

    let indexOfPreviousEdge = 0;
    let indexOfNextEdge = edges.length;

    edges.forEach((edge, index) => {
      const currentEdgeId = edge.id;
      if (currentEdgeId < newEdgeId) {
        indexOfPreviousEdge = index;
        return;
      }
      if (indexOfNextEdge === edges.length && currentEdgeId > newEdgeId) {
        indexOfNextEdge = index;
      }
    });

    const newEdgeSource = NODE_TYPES_ID[nodeType];
    const newEdgeTarget = edges[indexOfNextEdge]
      ? edges[indexOfNextEdge].id
      : NODE_TYPES_ID[TransferCanvasDefaultNodeType.TARGET];

    const newEdge: Edge = {
      id: newEdgeId,
      source: newEdgeSource,
      target: newEdgeTarget,
      animated: true,
    };

    const firstEdges = edges.slice(0, indexOfPreviousEdge);
    const previousEdge = { ...edges[indexOfPreviousEdge], target: newEdgeSource };
    const lastEdges = edges.slice(indexOfNextEdge);
    const newEdges = firstEdges.concat(previousEdge).concat(newEdge).concat(lastEdges);

    setEdges(newEdges);
  };

  const deleteNode = (nodeType: TransferCanvasTransformNodeType) => {
    setNodes((nodes) =>
      nodes
        .filter((node) => node.type !== nodeType)
        .map((node, index) => ({ ...node, position: setNodePosition(index) })),
    );

    const currentTransformationsFormValues = formInstance.getFieldValue('transformations');
    delete currentTransformationsFormValues[getTransformationType(nodeType)];

    formInstance.setFieldValue('transformations', currentTransformationsFormValues);
  };

  const deleteEdge = (nodeType: TransferCanvasTransformNodeType) => {
    const edges = getEdges();
    const newEdge: Edge = {
      id: '',
      source: '',
      target: '',
      animated: true,
    };

    let nodeIndex = 0;

    const restEdges = edges.filter((edge, index) => {
      if (edge.target === NODE_TYPES_ID[nodeType]) {
        newEdge.id = edge.id;
        newEdge.source = edge.source;
        nodeIndex = index;
        return false;
      }
      if (edge.source === NODE_TYPES_ID[nodeType]) {
        newEdge.target = edge.target;
        nodeIndex = index;
        return false;
      }
      return true;
    });

    const firstEdges = restEdges.slice(0, nodeIndex);
    const lastEdges = restEdges.slice(nodeIndex + 1);
    const newEdges = firstEdges.concat(newEdge).concat(lastEdges);

    setEdges(newEdges);
  };

  const handleAddTransformNode = (nodeType: TransferCanvasTransformNodeType) => {
    setTransformNodeTypes((state) => ({ ...state, [nodeType]: true }));
    addNewNode(nodeType);
    addNewEdge(nodeType);
  };

  const handleDeleteTransformNode = (nodeType: TransferCanvasTransformNodeType) => {
    setTransformNodeTypes((state) =>
      (Object.keys(state || {}) as Array<keyof TransformNodeTypes>).reduce(
        (prev, curr) => (curr === nodeType ? prev : { ...prev, [curr]: true }),
        {},
      ),
    );
    deleteNode(nodeType);
    deleteEdge(nodeType);
  };

  return { transformNodeTypes, handleAddTransformNode, handleDeleteTransformNode };
};

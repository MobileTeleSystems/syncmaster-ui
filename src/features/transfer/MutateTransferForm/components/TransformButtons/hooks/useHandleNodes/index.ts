import { Edge, useReactFlow } from '@xyflow/react';
import { useEffect, useState } from 'react';
import { Form } from 'antd';

import {
  TransferCanvasDefaultNodeType,
  TransferCanvasNodeData,
  TransferCanvasTransformNodeType,
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
      id: nodeType,
      type: nodeType,
      position: { x: 0, y: 0 },
      data: {},
    };

    const nodes = getNodes();

    const firstNodes = nodes.slice(0, nodes.length - 1);
    const lastNode = nodes[nodes.length - 1];
    const newNodes = firstNodes.concat(newNode).concat(lastNode);

    setNodes(
      newNodes.map((node, index) => {
        return { ...node, position: setNodePosition(index) };
      }),
    );
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
      if (edge.target === nodeType) {
        newEdge.id = `edge-${index + 1}`;
        newEdge.source = edge.source;
        nodeIndex = index;
        return false;
      }
      if (edge.source === nodeType) {
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
        (prev, curr) => (curr === nodeType ? prev : curr),
        {} as TransformNodeTypes,
      ),
    );
    deleteNode(nodeType);
    deleteEdge(nodeType);
  };

  return { transformNodeTypes, handleAddTransformNode, handleDeleteTransformNode };
};

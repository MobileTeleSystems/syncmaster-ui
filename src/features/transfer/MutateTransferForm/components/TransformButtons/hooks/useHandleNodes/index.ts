import { Edge, useReactFlow } from '@xyflow/react';
import { useEffect, useState } from 'react';
import { Form } from 'antd';
import { TransformationsForm } from '@entities/transformation';
import { useSupportedTransformationTypes } from '@features/transfer/MutateTransferForm/hooks';

import {
  TransferCanvasNodeData,
  TransferCanvasTransformNodeType,
  NODE_TYPES_ID,
  TRANSFER_CANVAS_NODE_TYPE_TO_TRANSFORM_TYPE_MAP,
  TRANSFER_CANVAS_FILTER_NODES,
} from '../../../TransferConnectionsCanvas';
import { getInitialTransformNodeTypes, TransformNodeTypes } from '../../utils';
import { setNodePosition } from '../../../TransferConnectionsCanvas';

/** Hook for handling nodes and edges data (add, delete) */
export const useHandleNodes = () => {
  const { getNodes, getEdges, setNodes, setEdges } = useReactFlow<TransferCanvasNodeData>();
  const formInstance = Form.useFormInstance();
  const { supportedTransformationTypes } = useSupportedTransformationTypes();

  const [transformNodeTypes, setTransformNodeTypes] = useState<TransformNodeTypes>();

  /** Set initial nodes using useEffect, because nodes state fill only after mounting */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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

    const newEdgeSource = NODE_TYPES_ID[nodeType];
    const prevEdgeIndex = edges.findIndex((edge) => edge.target > newEdgeSource);

    const newEdge: Edge = {
      id: '',
      source: newEdgeSource,
      target: edges[prevEdgeIndex].target,
      animated: true,
    };
    edges[prevEdgeIndex].target = newEdge.source;

    const newEdges = edges
      .slice(0, prevEdgeIndex + 1)
      // Place the new edge in the found position
      .concat(newEdge)
      .concat(edges.slice(prevEdgeIndex + 1))
      // Remap id for new collection
      .map((edge, index) => {
        edge.id = String(index + 1);
        return edge;
      });

    setEdges(newEdges);
  };

  const deleteNode = (nodeType: TransferCanvasTransformNodeType) => {
    setNodes((nodes) =>
      nodes
        .filter((node) => node.type !== nodeType)
        .map((node, index) => ({ ...node, position: setNodePosition(index) })),
    );

    const currentTransformationsFormValues = formInstance.getFieldValue('transformations') as TransformationsForm;
    currentTransformationsFormValues[TRANSFER_CANVAS_NODE_TYPE_TO_TRANSFORM_TYPE_MAP[nodeType]] = [];

    formInstance.setFieldValue('transformations', currentTransformationsFormValues);
  };

  const deleteEdge = (nodeType: TransferCanvasTransformNodeType) => {
    const edges = getEdges();

    let removedIndex = 0;
    let removedSource = '';
    const newEdges = edges
      .filter((edge, index) => {
        // Remove node and store removed index
        if (edge.target === NODE_TYPES_ID[nodeType]) {
          removedIndex = index;
          removedSource = edge.source;
          return false;
        }
        return true;
      })
      // Remap id for new collection
      .map((edge, index) => {
        edge.id = String(index + 1);
        return edge;
      });

    // Switch source for next node from remote
    newEdges[removedIndex].source = removedSource;

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

  /** Remove nodes that are not supported for the connection type */
  useEffect(() => {
    getNodes()
      .filter(
        ({ type }) =>
          TRANSFER_CANVAS_FILTER_NODES.includes(type as TransferCanvasTransformNodeType) &&
          !supportedTransformationTypes.includes(
            TRANSFER_CANVAS_NODE_TYPE_TO_TRANSFORM_TYPE_MAP[type as TransferCanvasTransformNodeType],
          ),
      )
      .forEach(({ type }) => handleDeleteTransformNode(type as TransferCanvasTransformNodeType));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supportedTransformationTypes]);

  return { transformNodeTypes, handleAddTransformNode, handleDeleteTransformNode };
};

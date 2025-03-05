import {
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  MiniMap,
  Node,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from '@xyflow/react';
import React, { useEffect } from 'react';

import classes from './styles.module.less';
import { CanvasProps } from './types';

export const Canvas = <N extends Node, E extends Edge>({
  initialNodes,
  initialEdges,
  children,
  ...props
}: CanvasProps<N, E>) => {
  const { fitView } = useReactFlow();

  // setNodes and setEdges will not be used
  // eslint-disable-next-line
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // eslint-disable-next-line
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  /** Set appropriate zoom of canvas when nodes count has changed */
  useEffect(() => {
    fitView({ duration: 200, padding: 0.4 });
  }, [nodes?.length, fitView]);

  return (
    <ReactFlow
      className={classes.root}
      attributionPosition="top-right"
      nodesFocusable
      elementsSelectable
      nodesConnectable={false}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodesDraggable
      panOnScroll={false}
      panOnDrag
      zoomOnScroll
      zoomOnPinch
      zoomOnDoubleClick={false}
      minZoom={0}
      fitViewOptions={{ duration: 200, padding: 0.4 }}
      fitView
      {...props}
    >
      <Background bgColor="#f0f2f5" variant={BackgroundVariant.Cross} size={3} />
      <Controls />
      <MiniMap />
      {children}
    </ReactFlow>
  );
};

import { Background, BackgroundVariant, Controls, Edge, MiniMap, Node, ReactFlow, useReactFlow } from '@xyflow/react';
import React, { useEffect } from 'react';

import classes from './styles.module.less';
import { CanvasProps } from './types';

export const Canvas = <N extends Node, E extends Edge>({ children, nodes, ...props }: CanvasProps<N, E>) => {
  const { fitView } = useReactFlow();

  /** Set appropriate zoom of canvas when nodes count has changed */
  useEffect(() => {
    fitView({ duration: 200 });
  }, [nodes?.length, fitView]);

  return (
    <ReactFlow
      className={classes.root}
      attributionPosition="top-right"
      nodesFocusable
      elementsSelectable
      nodesConnectable={false}
      nodes={nodes}
      nodesDraggable
      panOnScroll={false}
      panOnDrag
      zoomOnScroll
      zoomOnPinch
      zoomOnDoubleClick={false}
      minZoom={0}
      fitViewOptions={{ duration: 200, padding: 0.5 }}
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

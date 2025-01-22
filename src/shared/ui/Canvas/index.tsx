import { Background, BackgroundVariant, Controls, Edge, MiniMap, Node, ReactFlow } from '@xyflow/react';
import React from 'react';

import { CanvasProps } from './types';

export const Canvas = <N extends Node, E extends Edge>(props: CanvasProps<N, E>) => {
  return (
    <ReactFlow
      nodesFocusable
      elementsSelectable
      nodesConnectable={false}
      nodesDraggable
      panOnScroll={false}
      panOnDrag
      zoomOnScroll
      zoomOnPinch
      zoomOnDoubleClick={false}
      fitView
      {...props}
    >
      <Background variant={BackgroundVariant.Dots} />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
};

import { Background, BackgroundVariant, Controls, Edge, MiniMap, Node, ReactFlow } from '@xyflow/react';
import React from 'react';

import classes from './styles.module.less';
import { CanvasProps } from './types';

export const Canvas = <N extends Node, E extends Edge>(props: CanvasProps<N, E>) => {
  return (
    <ReactFlow
      className={classes.root}
      attributionPosition="top-right"
      nodesFocusable
      elementsSelectable
      nodesConnectable={false}
      nodesDraggable
      panOnScroll={false}
      panOnDrag
      zoomOnScroll
      zoomOnPinch
      zoomOnDoubleClick={false}
      fitViewOptions={{ duration: 200, padding: 1 }}
      fitView
      {...props}
    >
      <Background bgColor="#f0f2f5" variant={BackgroundVariant.Cross} size={3} />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
};

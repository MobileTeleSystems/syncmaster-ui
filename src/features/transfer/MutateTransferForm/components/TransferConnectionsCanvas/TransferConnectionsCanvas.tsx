import React, { useMemo } from 'react';
import { Canvas, Fieldset } from '@shared/ui';
import { ReactFlowProvider, useEdgesState, useNodesState } from '@xyflow/react';

import { TransformButtons } from '../TransformButtons';

import { TransferCanvasProps } from './types';
import { getInitialNodes } from './utils';
import { INITIAL_EDGES, NODE_TYPES } from './constants';
import classes from './styles.module.less';

import '@xyflow/react/dist/style.css';

export const TransferConnectionsCanvas = (props: TransferCanvasProps) => {
  const initialNodes = useMemo(() => {
    return getInitialNodes(props);
  }, [props]);

  // TODO: [DOP-22355] setNodes and setEdges will be used in next task
  // eslint-disable-next-line
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // eslint-disable-next-line
  const [edges, setEdges, onEdgesChange] = useEdgesState(INITIAL_EDGES);

  return (
    <ReactFlowProvider>
      <Fieldset title="Connections settings">
        <div className={classes.root}>
          <Canvas
            nodeTypes={NODE_TYPES}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
          >
            <TransformButtons />
          </Canvas>
        </div>
      </Fieldset>
    </ReactFlowProvider>
  );
};

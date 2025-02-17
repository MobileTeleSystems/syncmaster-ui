import React, { useMemo } from 'react';
import { Canvas } from '@shared/ui';
import { ReactFlowProvider, useEdgesState, useNodesState } from '@xyflow/react';
import { Form } from 'antd';
import { TransformationsForm, TransformationType } from '@entities/transformation';

import { TransformButtons } from '../TransformButtons';

import { TransferCanvasProps } from './types';
import { getInitialEdges, getInitialNodes } from './utils';
import { NODE_TYPES } from './constants';
import classes from './styles.module.less';

import '@xyflow/react/dist/style.css';

export const TransferConnectionsCanvas = ({ groupId }: TransferCanvasProps) => {
  const formInstance = Form.useFormInstance();

  const initialTransformations = useMemo(() => {
    return formInstance.getFieldValue('transformations') as TransformationsForm;
  }, [formInstance]);

  const initialNodes = useMemo(() => {
    return getInitialNodes({
      groupId,
      hasFilterRows: !!initialTransformations[TransformationType.FILTER_ROWS],
      hasFilterColumns: !!initialTransformations[TransformationType.FILTER_COLUMNS],
    });
  }, [groupId, initialTransformations]);

  const initialEdges = useMemo(() => {
    return getInitialEdges(initialNodes);
  }, [initialNodes]);

  // setNodes and setEdges will not be used
  // eslint-disable-next-line
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // eslint-disable-next-line
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlowProvider>
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
    </ReactFlowProvider>
  );
};

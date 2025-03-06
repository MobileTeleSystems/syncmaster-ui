import React, { useMemo } from 'react';
import { Canvas } from '@shared/ui';
import { ReactFlowProvider } from '@xyflow/react';
import { Form } from 'antd';
import { ShowButtonsContext, TransformationsForm, TransformationType } from '@entities/transformation';

import { TransformButtons } from '../TransformButtons';

import { TransferCanvasProps } from './types';
import { getInitialEdges, getInitialNodes } from './utils';
import { NODE_TYPES } from './constants';
import classes from './styles.module.less';

import '@xyflow/react/dist/style.css';

export const TransferConnectionsCanvas = ({ groupId, isDisplayedButtons = true }: TransferCanvasProps) => {
  const formInstance = Form.useFormInstance();

  const initialTransformations = useMemo(() => {
    return formInstance.getFieldValue('transformations') as TransformationsForm;
  }, [formInstance]);

  const initialNodes = useMemo(() => {
    return getInitialNodes({
      groupId,
      hasFilterRows: !!initialTransformations[TransformationType.FILTER_ROWS]?.length,
      hasFilterColumns: !!initialTransformations[TransformationType.FILTER_COLUMNS]?.length,
      hasFilterFile: !!initialTransformations[TransformationType.FILTER_FILE]?.length,
    });
  }, [groupId, initialTransformations]);

  const initialEdges = useMemo(() => {
    return getInitialEdges(initialNodes);
  }, [initialNodes]);

  return (
    <ShowButtonsContext.Provider value={{ isDisplayed: isDisplayedButtons }}>
      <ReactFlowProvider>
        <div className={classes.root}>
          <Canvas nodeTypes={NODE_TYPES} initialNodes={initialNodes} initialEdges={initialEdges}>
            {isDisplayedButtons && <TransformButtons />}
          </Canvas>
        </div>
      </ReactFlowProvider>
    </ShowButtonsContext.Provider>
  );
};

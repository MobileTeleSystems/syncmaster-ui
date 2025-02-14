import { TransferCanvasNodeData } from '../../../TransferConnectionsCanvas';

import { TransformNodeTypes } from './types';

/** Util for mapping react flow nodes data to appropriate type for handling nodes state in hook "useHandleNodes" */
export const getInitialTransformNodeTypes = (nodes: TransferCanvasNodeData[]): TransformNodeTypes => {
  return nodes.reduce((prev, curr) => {
    if (curr.type) {
      return { ...prev, [curr.type]: true };
    }
    return prev;
  }, {} as TransformNodeTypes);
};

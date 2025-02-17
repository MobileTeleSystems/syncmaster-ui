import { TransferCanvasDefaultNodeType, TransferCanvasNodeData } from '../../../TransferConnectionsCanvas';

import { TransformNodeTypes } from './types';

/** Util for mapping react flow nodes data to appropriate type for handling nodes state in hook "useHandleNodes" */
export const getInitialTransformNodeTypes = (nodes: TransferCanvasNodeData[]): TransformNodeTypes => {
  return nodes.reduce((prev, curr) => {
    switch (curr.type) {
      case TransferCanvasDefaultNodeType.SOURCE:
      case TransferCanvasDefaultNodeType.TARGET:
      case undefined:
        return prev;
      default:
        return { ...prev, [curr.type]: true };
    }
  }, {} as TransformNodeTypes);
};

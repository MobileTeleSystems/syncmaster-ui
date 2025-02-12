import { TransformationType } from '@entities/transformation';

import { TransferCanvasTransformNodeType } from '../../../TransferConnectionsCanvas';

/** Util for matching react flow node type to transformation type from backend */
export const getTransformationType = (nodeType: TransferCanvasTransformNodeType): TransformationType => {
  switch (nodeType) {
    case TransferCanvasTransformNodeType.ROWS_FILTER:
      return TransformationType.ROWS_FILTER;
  }
};

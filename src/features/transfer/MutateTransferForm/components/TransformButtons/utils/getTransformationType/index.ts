import { TransformationType } from '@entities/transformation';

import { TransferCanvasTransformNodeType } from '../../../TransferConnectionsCanvas';

/** Util for matching react flow node type to transformation type from backend */
export const getTransformationType = (nodeType: TransferCanvasTransformNodeType): TransformationType => {
  switch (nodeType) {
    case TransferCanvasTransformNodeType.FILTER_ROWS:
      return TransformationType.FILTER_ROWS;
    case TransferCanvasTransformNodeType.FILTER_COLUMNS:
      return TransformationType.FILTER_COLUMNS;
    case TransferCanvasTransformNodeType.FILTER_FILE:
      return TransformationType.FILTER_FILE;
  }
};

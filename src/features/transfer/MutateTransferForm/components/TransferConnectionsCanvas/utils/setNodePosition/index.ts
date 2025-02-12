import { Node } from '@xyflow/react';

import { NODE_POSITION_X_GAP_DEFAULT, NODE_POSITION_X_GAP_LARGE } from '../../constants';

/** Util for setting position for react flow node by its ordinal index in canvas  */
export const setNodePosition = (currentIndex: number): Node['position'] => {
  if (currentIndex > 1) {
    return { x: (currentIndex - 1) * NODE_POSITION_X_GAP_LARGE + NODE_POSITION_X_GAP_DEFAULT, y: 0 };
  }
  return { x: currentIndex * NODE_POSITION_X_GAP_DEFAULT, y: 0 };
};

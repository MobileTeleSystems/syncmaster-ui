import { TransferCanvasNodeData, TransferCanvasNode } from '../../types';

import { GetInitialNodesProps } from './types';

export const getInitialNodes = ({
  groupId,
  initialSourceConnectionType,
  initialTargetConnectionType,
}: GetInitialNodesProps): TransferCanvasNodeData[] => [
  {
    id: TransferCanvasNode.SOURCE,
    type: TransferCanvasNode.SOURCE,
    data: { groupId, initialSourceConnectionType },
    position: { x: 0, y: 0 },
  },
  {
    id: TransferCanvasNode.TARGET,
    type: TransferCanvasNode.TARGET,
    data: { groupId, initialTargetConnectionType },
    position: { x: 600, y: 0 },
  },
];

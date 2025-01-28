import { TransferCanvasNodeData, TransferCanvasDefaultNodeType } from '../../types';

import { GetInitialNodesProps } from './types';

export const getInitialNodes = ({
  groupId,
  initialSourceConnectionType,
  initialTargetConnectionType,
}: GetInitialNodesProps): TransferCanvasNodeData[] => [
  {
    id: TransferCanvasDefaultNodeType.SOURCE,
    type: TransferCanvasDefaultNodeType.SOURCE,
    data: { groupId, initialSourceConnectionType },
    position: { x: 0, y: 0 },
  },
  {
    id: TransferCanvasDefaultNodeType.TARGET,
    type: TransferCanvasDefaultNodeType.TARGET,
    data: { groupId, initialTargetConnectionType },
    position: { x: 500, y: 0 },
  },
];

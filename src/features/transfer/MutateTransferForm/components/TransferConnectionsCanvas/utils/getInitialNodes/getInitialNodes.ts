import { TransferCanvasNodeData, TransferCanvasDefaultNodeType, TransferCanvasTransformNodeType } from '../../types';
import { setNodePosition } from '../setNodePosition';

import { GetInitialNodesProps } from './types';

export const getInitialNodes = ({ groupId, hasFilterRows }: GetInitialNodesProps): TransferCanvasNodeData[] => {
  const nodes: TransferCanvasNodeData[] = [
    {
      id: TransferCanvasDefaultNodeType.SOURCE,
      type: TransferCanvasDefaultNodeType.SOURCE,
      data: { groupId },
      position: setNodePosition(0),
    },
  ];

  let nodeIndex = 1;

  if (hasFilterRows) {
    nodes.push({
      id: TransferCanvasTransformNodeType.ROWS_FILTER,
      type: TransferCanvasTransformNodeType.ROWS_FILTER,
      data: {},
      position: setNodePosition(nodeIndex),
    });
    nodeIndex++;
  }

  nodes.push({
    id: TransferCanvasDefaultNodeType.TARGET,
    type: TransferCanvasDefaultNodeType.TARGET,
    data: { groupId },
    position: setNodePosition(nodeIndex),
  });

  return nodes;
};

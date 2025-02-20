import { NODE_TYPES_ID } from '../../constants';
import { TransferCanvasNodeData, TransferCanvasDefaultNodeType, TransferCanvasTransformNodeType } from '../../types';
import { setNodePosition } from '../setNodePosition';

import { GetInitialNodesProps } from './types';

export const getInitialNodes = ({
  groupId,
  hasFilterRows,
  hasFilterColumns,
  hasFilterFile,
}: GetInitialNodesProps): TransferCanvasNodeData[] => {
  const nodes: TransferCanvasNodeData[] = [
    {
      id: NODE_TYPES_ID[TransferCanvasDefaultNodeType.SOURCE],
      type: TransferCanvasDefaultNodeType.SOURCE,
      data: { groupId },
      position: setNodePosition(0),
    },
  ];

  let nodeIndex = 1;

  if (hasFilterRows) {
    nodes.push({
      id: NODE_TYPES_ID[TransferCanvasTransformNodeType.FILTER_ROWS],
      type: TransferCanvasTransformNodeType.FILTER_ROWS,
      data: {},
      position: setNodePosition(nodeIndex),
    });
    nodeIndex++;
  }

  if (hasFilterColumns) {
    nodes.push({
      id: NODE_TYPES_ID[TransferCanvasTransformNodeType.FILTER_COLUMNS],
      type: TransferCanvasTransformNodeType.FILTER_COLUMNS,
      data: {},
      position: setNodePosition(nodeIndex),
    });
    nodeIndex++;
  }

  if (hasFilterFile) {
    nodes.push({
      id: NODE_TYPES_ID[TransferCanvasTransformNodeType.FILTER_FILE],
      type: TransferCanvasTransformNodeType.FILTER_FILE,
      data: {},
      position: setNodePosition(nodeIndex),
    });
    nodeIndex++;
  }

  nodes.push({
    id: NODE_TYPES_ID[TransferCanvasDefaultNodeType.TARGET],
    type: TransferCanvasDefaultNodeType.TARGET,
    data: { groupId },
    position: setNodePosition(nodeIndex),
  });

  return nodes;
};

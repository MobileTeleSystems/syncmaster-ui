import { TransferCanvasTransformNodeType } from '../../../TransferConnectionsCanvas';

export interface TransformButtonItemProps {
  nodeType: TransferCanvasTransformNodeType;
  isExist: boolean;
  onAddNode: (nodeType: TransferCanvasTransformNodeType) => void;
  onDeleteNode: (nodeType: TransferCanvasTransformNodeType) => void;
}

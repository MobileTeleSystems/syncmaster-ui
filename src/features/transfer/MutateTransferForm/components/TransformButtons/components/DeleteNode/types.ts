import { TransferCanvasTransformNodeType } from '../../../TransferConnectionsCanvas';

export interface DeleteNodeProps {
  nodeType: TransferCanvasTransformNodeType;
  onConfirm: (nodeType: TransferCanvasTransformNodeType) => void;
  onCancel: () => void;
}

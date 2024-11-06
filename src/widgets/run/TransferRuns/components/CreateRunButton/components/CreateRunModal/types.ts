import { ModalProps } from 'antd';

export interface CreateRunModalProps extends ModalProps {
  transferId: number;
  transferName: string;
  onClose: () => void;
}

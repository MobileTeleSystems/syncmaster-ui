import { ModalProps } from 'antd';

export interface AddGroupUserModalProps extends ModalProps {
  groupId: number;
  onClose: () => void;
}

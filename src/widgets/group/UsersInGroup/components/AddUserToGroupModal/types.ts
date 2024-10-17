import { ModalProps } from 'antd';

export interface AddUserToGroupModalProps extends ModalProps {
  groupId: number;
  onClose: () => void;
}

import { UserInGroup } from '@entities/group';
import { ModalProps } from 'antd';

export interface DeleteUserFromGroupModalProps extends ModalProps {
  groupId: number;
  user?: UserInGroup;
  onClose: () => void;
}

import { UserInGroup } from '@entities/group';
import { ModalProps } from 'antd';

export interface UpdateUserInGroupModalProps extends ModalProps {
  groupId: number;
  user?: UserInGroup;
  onClose: () => void;
}
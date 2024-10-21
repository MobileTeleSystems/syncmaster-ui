import { GroupUser } from '@entities/group';
import { ModalProps } from 'antd';

export interface DeleteGroupUserModalProps extends ModalProps {
  groupId: number;
  onClose: () => void;
  user?: GroupUser;
}

import { GroupUser } from '@entities/group';
import { ModalProps } from 'antd';

export interface UpdateGroupUserModalProps extends ModalProps {
  groupId: number;
  onClose: () => void;
  user?: GroupUser;
}

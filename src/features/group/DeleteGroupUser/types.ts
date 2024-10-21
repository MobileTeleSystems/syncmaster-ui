import { GroupUser } from '@entities/group';

export interface DeleteGroupUserProps {
  groupId: number;
  user: GroupUser;
  onSuccess: () => void;
  onCancel: () => void;
}

import { UserInGroup } from '@entities/group';

export interface DeleteUserFromGroupProps {
  groupId: number;
  user: UserInGroup;
  onSuccess: () => void;
  onCancel: () => void;
}

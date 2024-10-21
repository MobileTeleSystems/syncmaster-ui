import { UpdateUserInGroupRequest, UserInGroup } from '@entities/group';

export interface UpdateUserInGroupForm extends Pick<UpdateUserInGroupRequest, 'role'> {}

export interface UpdateUserInGroupProps {
  groupId: number;
  user: UserInGroup;
  onSuccess: () => void;
  onCancel: () => void;
}

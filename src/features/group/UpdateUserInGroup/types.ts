import { UpdateUserInGroupRequest, UserInGroup } from '@entities/group';

export interface UpdateUserInGroupForm extends Omit<UpdateUserInGroupRequest, 'groupId'> {}

export interface UpdateUserInGroupProps {
  groupId: number;
  user: UserInGroup;
  onSuccess: () => void;
  onCancel: () => void;
}

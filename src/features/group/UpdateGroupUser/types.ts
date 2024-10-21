import { UpdateGroupUserRequest, GroupUser } from '@entities/group';

export interface UpdateGroupUserForm extends Pick<UpdateGroupUserRequest, 'role'> {}

export interface UpdateGroupUserProps {
  groupId: number;
  user: GroupUser;
  onSuccess: () => void;
  onCancel: () => void;
}

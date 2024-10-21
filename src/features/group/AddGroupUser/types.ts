import { AddGroupUserRequest } from '@entities/group';

export interface AddGroupUserForm extends Omit<AddGroupUserRequest, 'groupId'> {}

export interface AddGroupUserProps {
  groupId: number;
  onSuccess: () => void;
  onCancel: () => void;
}

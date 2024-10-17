import { AddUserToGroupRequest } from '@entities/group';

export interface AddUserToGroupForm extends Omit<AddUserToGroupRequest, 'groupId'> {}

export interface AddUserToGroupProps {
  groupId: number;
  onSuccess: () => void;
  onCancel: () => void;
}

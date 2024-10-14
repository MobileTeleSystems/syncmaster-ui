import { Group, UpdateGroupRequest } from '@entities/group';

export interface UpdateGroupForm extends Omit<UpdateGroupRequest, 'id'> {}

export interface UpdateGroupProps {
  group: Group;
}

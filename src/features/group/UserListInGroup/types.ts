import { Group, UserInGroup } from '@entities/group';

export interface UserListInGroupProps {
  group: Group;
  onUpdateRowClick: (group: UserInGroup) => void;
  onDeleteRowClick: (group: UserInGroup) => void;
}

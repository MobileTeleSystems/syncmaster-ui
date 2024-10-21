import { Group, GroupUser } from '@entities/group';

export interface GroupUserListProps {
  group: Group;
  onUpdateRowClick: (group: GroupUser) => void;
  onDeleteRowClick: (group: GroupUser) => void;
}

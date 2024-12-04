import { Connection } from '@entities/connection';
import { Group } from '@entities/group';

export interface ConnectionListProps {
  group: Group;
  onUpdateRowClick: (connection: Connection) => void;
  onDeleteRowClick: (connection: Connection) => void;
}

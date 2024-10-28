import { Connection } from '@entities/connection';
import { Group } from '@entities/group';

export interface ConnectionDetailProps {
  connection: Connection;
  group: Group;
}

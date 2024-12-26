import { Connection, UpdateConnectionRequest } from '@entities/connection';
import { GroupData } from '@entities/group';

export type UpdateConnectionForm = Omit<UpdateConnectionRequest, 'id'>;

export interface UpdateConnectionProps {
  connection: Connection;
  group: GroupData;
}

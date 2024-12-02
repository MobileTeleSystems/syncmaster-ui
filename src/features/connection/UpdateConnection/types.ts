import { Connection, CreateConnectionRequest, UpdateConnectionRequest } from '@entities/connection';
import { GroupData } from '@entities/group';

export type UpdateConnectionForm = Omit<UpdateConnectionRequest, 'connection_data' | 'auth_data'> &
  CreateConnectionRequest['connection_data'] &
  CreateConnectionRequest['auth_data'];

export interface UpdateConnectionProps {
  connection: Connection;
  group: GroupData;
}

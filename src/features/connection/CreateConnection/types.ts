import { CreateConnectionRequest } from '@entities/connection';
import { GroupData } from '@entities/group';

export type CreateConnectionForm = Omit<CreateConnectionRequest, 'group_id' | 'connection_data' | 'auth_data'> &
  CreateConnectionRequest['connection_data'] &
  CreateConnectionRequest['auth_data'];

export interface CreateConnectionProps {
  group: GroupData;
}

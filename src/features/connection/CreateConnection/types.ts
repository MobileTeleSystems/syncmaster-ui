import { CreateConnectionRequest } from '@entities/connection';
import { GroupData } from '@entities/group';

export type CreateConnectionForm = Omit<CreateConnectionRequest, 'group_id'>;

export interface CreateConnectionProps {
  group: GroupData;
}

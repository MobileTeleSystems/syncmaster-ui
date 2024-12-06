import { GroupData } from '@entities/group';
import { CreateTransferRequest } from '@entities/transfer';

export interface CreateTransferForm extends Omit<CreateTransferRequest, 'group_id'> {}

export interface CreateTransferProps {
  group: GroupData;
}

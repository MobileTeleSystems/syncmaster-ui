import { GroupData } from '@entities/group';
import { Transfer, UpdateTransferRequest } from '@entities/transfer';

export interface UpdateTransferForm extends Omit<UpdateTransferRequest, 'id'> {}

export interface UpdateTransferProps {
  transfer: Transfer;
  group: GroupData;
}

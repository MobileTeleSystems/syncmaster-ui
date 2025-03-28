import { GroupData } from '@entities/group';
import { Transfer, UpdateTransferRequest } from '@entities/transfer';
import { TransformationsForm } from '@entities/transformation';

export interface UpdateTransferForm extends Omit<UpdateTransferRequest, 'id' | 'group_id' | 'transformations'> {
  transformations?: TransformationsForm;
}

export interface UpdateTransferProps {
  transfer: Transfer;
  group: GroupData;
}

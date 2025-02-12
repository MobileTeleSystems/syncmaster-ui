import { GroupData } from '@entities/group';
import { CreateTransferRequest } from '@entities/transfer';
import { TransformationsForm } from '@entities/transformation';

export interface CreateTransferForm extends Omit<CreateTransferRequest, 'group_id' | 'transformations'> {
  transformations?: TransformationsForm;
}

export interface CreateTransferProps {
  group: GroupData;
}

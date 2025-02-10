import { GroupData } from '@entities/group';
import { TransferConnectionParamFieldName } from '@entities/transfer';

export interface MutateTransferFormProps {
  group: GroupData;
  onCancel: () => void;
}

export interface ConnectionParamFieldName {
  name: TransferConnectionParamFieldName;
}

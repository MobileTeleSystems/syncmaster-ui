import { GroupData } from '@entities/group';
import { TransferConnectionParamFieldName } from '@entities/transfer';

import { SourceParamsProps, TargetParamsProps } from './components';

export interface MutateTransferFormProps
  extends Pick<SourceParamsProps, 'initialSourceConnectionType'>,
    Pick<TargetParamsProps, 'initialTargetConnectionType'> {
  group: GroupData;
  onCancel: () => void;
}

export interface ConnectionParamFieldName {
  name: TransferConnectionParamFieldName;
}

import { TransferStrategyParams } from '@entities/transfer';
import { prepareOptionsForSelect } from '@shared/ui';

export const TRANSFER_STRATEGY_PARAMS_SELECT_OPTIONS = prepareOptionsForSelect<TransferStrategyParams['type']>({
  data: ['full', 'incremental'],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

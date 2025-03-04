import { TransferConnectionFileIncrementBy } from '@entities/transfer';
import { prepareOptionsForSelect } from '@shared/ui';

export const STRATEGY_PARAMS_INCREMENT_BY_SELECT_OPTIONS = prepareOptionsForSelect<{
  label: string;
  value: TransferConnectionFileIncrementBy;
}>({
  data: [
    { label: 'File modification type', value: 'file_modified_since' },
    { label: 'File name', value: 'file_name' },
  ],
  renderLabel: (data) => data.label,
  renderValue: (data) => data.value,
});

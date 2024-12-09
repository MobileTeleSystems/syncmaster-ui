import { prepareOptionsForSelect } from '@shared/ui';
import { FileFormatType } from '@shared/types';

import { TransferStrategyParams } from './api';

export const TRANSFER_STRATEGY_PARAMS_SELECT_OPTIONS = prepareOptionsForSelect<TransferStrategyParams['type']>({
  data: ['full', 'incremental'],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

export const TRANSFER_SOURCE_CONNECTION_FILE_FORMAT_SELECT_OPTIONS = prepareOptionsForSelect<FileFormatType>({
  data: Object.values(FileFormatType),
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

export const TRANSFER_TARGET_CONNECTION_FILE_FORMAT_SELECT_OPTIONS = prepareOptionsForSelect<
  Exclude<FileFormatType, 'json'>
>({
  data: [FileFormatType.CSV, FileFormatType.JSON_LINE],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

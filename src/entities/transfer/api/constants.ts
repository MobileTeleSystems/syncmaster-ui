import { TransferConnectionFileIncrementBy, TransferStrategyType } from './types';

export const TRANSFER_CONNECTION_FILE_INCREMENT_BY_DISPLAY = {
  [TransferConnectionFileIncrementBy.FILE_MODIFIED_SINCE]: 'fileModifiedSince',
  [TransferConnectionFileIncrementBy.FILE_NAME]: 'filename',
} as const;

export const TRANSFER_STRATEGY_TYPE_DISPLAY = {
  [TransferStrategyType.FULL]: 'full',
  [TransferStrategyType.INCREMENTAL]: 'incremental',
} as const;

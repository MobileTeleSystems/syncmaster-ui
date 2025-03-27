import { FileSizeUnit } from './types';

export const FILE_SIZE_UNIT_DISPLAY = {
  [FileSizeUnit.B]: 'b',
  [FileSizeUnit.KB]: 'kb',
  [FileSizeUnit.MB]: 'mb',
  [FileSizeUnit.GB]: 'gb',
} as const;

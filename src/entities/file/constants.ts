import { FileSizeUnit } from './types';

export const FILE_SIZE_UNIT_DISPLAY = {
  [FileSizeUnit.B]: 'b',
  [FileSizeUnit.KiB]: 'kib',
  [FileSizeUnit.MiB]: 'mib',
  [FileSizeUnit.GiB]: 'gib',
} as const;

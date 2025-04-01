import { FileSizeUnit, FileSizeUnitValue } from '@entities/file';

import { ParseFileSizeReturn } from './types';

/** Util for parsing file size in bytes to appropriate unit and value */
export const parseFileSize = (bytes: number): ParseFileSizeReturn => {
  if (bytes >= FileSizeUnitValue.GiB) {
    return { value: bytes / FileSizeUnitValue.GiB, unit: FileSizeUnit.GiB };
  }
  if (bytes >= FileSizeUnitValue.MiB) {
    return { value: bytes / FileSizeUnitValue.MiB, unit: FileSizeUnit.MiB };
  }
  if (bytes >= FileSizeUnitValue.KiB) {
    return { value: bytes / FileSizeUnitValue.KiB, unit: FileSizeUnit.KiB };
  }
  return { value: bytes, unit: FileSizeUnit.B };
};

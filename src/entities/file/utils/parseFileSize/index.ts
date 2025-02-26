import { FileSizeUnit, FileSizeUnitValue } from '@entities/file';

import { ParseFileSizeReturn } from './types';

/** Util for parsing file size in bytes to appropriate unit and value */
export const parseFileSize = (bytes: number): ParseFileSizeReturn => {
  if (bytes >= FileSizeUnitValue.GB) {
    return { value: bytes / FileSizeUnitValue.GB, unit: FileSizeUnit.GB };
  }
  if (bytes >= FileSizeUnitValue.MB) {
    return { value: bytes / FileSizeUnitValue.MB, unit: FileSizeUnit.MB };
  }
  if (bytes >= FileSizeUnitValue.KB) {
    return { value: bytes / FileSizeUnitValue.KB, unit: FileSizeUnit.KB };
  }
  return { value: bytes, unit: FileSizeUnit.B };
};

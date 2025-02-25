import { FileSizeUnit, FileSizeUnitValue } from '@entities/file';

import { ParseFileSizeReturn } from './types';

/** Util for parsing file size in bytes to appropriate unit and value */
export const parseFileSize = (bytes: number): ParseFileSizeReturn => {
  if (bytes >= FileSizeUnitValue.Gb) {
    return { value: bytes / FileSizeUnitValue.Gb, unit: FileSizeUnit.Gb };
  }
  if (bytes >= FileSizeUnitValue.Mb) {
    return { value: bytes / FileSizeUnitValue.Mb, unit: FileSizeUnit.Mb };
  }
  if (bytes >= FileSizeUnitValue.Kb) {
    return { value: bytes / FileSizeUnitValue.Kb, unit: FileSizeUnit.Kb };
  }
  return { value: bytes, unit: FileSizeUnit.b };
};

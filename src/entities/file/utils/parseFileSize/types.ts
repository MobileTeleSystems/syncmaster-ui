import { FileSizeUnit } from '@entities/file/@x/transformation';

export interface ParseFileSizeReturn {
  value: number;
  unit: FileSizeUnit;
}

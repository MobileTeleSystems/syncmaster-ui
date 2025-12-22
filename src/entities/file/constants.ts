import { FileColumnDelimiter, FileLineSeparator, FileSizeUnit } from './types';

export const FILE_SIZE_UNIT_DISPLAY = {
  [FileSizeUnit.B]: 'b',
  [FileSizeUnit.KiB]: 'kib',
  [FileSizeUnit.MiB]: 'mib',
  [FileSizeUnit.GiB]: 'gib',
} as const;

export const FILE_LINE_SEPARATOR_VALUES: Record<FileLineSeparator, string> = {
  [FileLineSeparator.WIN]: '\r\n',
  [FileLineSeparator.UNIX]: '\n',
  [FileLineSeparator.MAC]: '\r',
} as const;

export const FILE_COLUMN_DELIMITER_VALUES: Record<FileColumnDelimiter, string> = {
  [FileColumnDelimiter.TAB]: '\t',
  [FileColumnDelimiter.SPACE]: ' ',
  [FileColumnDelimiter.COMMA]: ',',
  [FileColumnDelimiter.SEMICOLON]: ';',
  [FileColumnDelimiter.PIPE]: '|',
} as const;

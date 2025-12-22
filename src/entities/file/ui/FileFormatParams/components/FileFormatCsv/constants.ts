import { prepareOptionsForSelect } from '@shared/ui';
import { FILE_COLUMN_DELIMITER_VALUES, FILE_LINE_SEPARATOR_VALUES } from '@entities/file/constants';
import { Csv, FileColumnDelimiter, FileCompression, FileLineSeparator } from '@entities/file/types';

export const CSV_COMPRESSION_SELECT_OPTIONS = prepareOptionsForSelect<Csv['compression']>({
  data: [
    FileCompression.BZIP2,
    FileCompression.DEFLATE,
    FileCompression.GZIP,
    FileCompression.LZ4,
    FileCompression.SNAPPY,
  ],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

export const CSV_DELIMITER_SELECT_OPTIONS = prepareOptionsForSelect<Csv['delimiter']>({
  data: [
    FileColumnDelimiter.TAB,
    FileColumnDelimiter.SPACE,
    FileColumnDelimiter.COMMA,
    FileColumnDelimiter.SEMICOLON,
    FileColumnDelimiter.PIPE,
  ],
  renderLabel: (data) => data,
  renderValue: (data) => FILE_COLUMN_DELIMITER_VALUES[data as FileColumnDelimiter],
});

export const CSV_SEPARATOR_SELECT_OPTIONS = prepareOptionsForSelect<Csv['line_sep']>({
  data: Object.values([FileLineSeparator.WIN, FileLineSeparator.UNIX, FileLineSeparator.MAC]),
  renderLabel: (data) => data,
  renderValue: (data) => FILE_LINE_SEPARATOR_VALUES[data as FileLineSeparator],
});

export const CSV_QUOTE_SELECT_OPTIONS = prepareOptionsForSelect<Csv['quote']>({
  data: ['"', "'"],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

export const CSV_ESCAPE_SELECT_OPTIONS = prepareOptionsForSelect<Csv['escape']>({
  data: ['\\', '"', "'"],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

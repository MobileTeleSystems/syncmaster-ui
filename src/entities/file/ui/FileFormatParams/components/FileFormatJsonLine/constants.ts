import { prepareOptionsForSelect } from '@shared/ui';
import { FILE_LINE_SEPARATOR_VALUES } from '@entities/file/constants';

import { Csv, FileCompression, FileLineSeparator, JsonLine } from '../../../../types';

export const JSON_LINE_COMPRESSION_SELECT_OPTIONS = prepareOptionsForSelect<JsonLine['compression']>({
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

export const JSON_LINE_SEPARATOR_SELECT_OPTIONS = prepareOptionsForSelect<Csv['line_sep']>({
  data: Object.values([FileLineSeparator.WIN, FileLineSeparator.UNIX, FileLineSeparator.MAC]),
  renderLabel: (data) => data,
  renderValue: (data) => FILE_LINE_SEPARATOR_VALUES[data as FileLineSeparator],
});

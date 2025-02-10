import { prepareOptionsForSelect } from '@shared/ui';

import { FileFormatType } from '../../types';

export const SOURCE_FILE_FORMAT_SELECT_OPTIONS = prepareOptionsForSelect<FileFormatType>({
  data: Object.values(FileFormatType),
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

export const TARGET_FILE_FORMAT_SELECT_OPTIONS = prepareOptionsForSelect<Exclude<FileFormatType, 'json'>>({
  data: [
    FileFormatType.CSV,
    FileFormatType.EXCEL,
    FileFormatType.JSON_LINE,
    FileFormatType.ORC,
    FileFormatType.PARQUET,
    FileFormatType.XML,
  ],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

import { prepareOptionsForSelect } from '@shared/ui';

import { Csv, FileCompression } from '../../../../types';

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

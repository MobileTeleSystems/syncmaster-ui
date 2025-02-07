import { prepareOptionsForSelect } from '@shared/ui';

import { FileCompression, JsonLine } from '../../../../types';

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

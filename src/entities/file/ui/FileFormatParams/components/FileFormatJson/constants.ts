import { prepareOptionsForSelect } from '@shared/ui';

import { FileCompression, Json } from '../../../../types';

export const JSON_COMPRESSION_SELECT_OPTIONS = prepareOptionsForSelect<Json['compression']>({
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

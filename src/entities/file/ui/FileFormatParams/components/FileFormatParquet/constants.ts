import { prepareOptionsForSelect } from '@shared/ui';

import { FileCompression, Parquet } from '../../../../types';

export const PARQUET_COMPRESSION_SELECT_OPTIONS = prepareOptionsForSelect<Parquet['compression']>({
  data: [FileCompression.GZIP, FileCompression.LZ4, FileCompression.SNAPPY],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

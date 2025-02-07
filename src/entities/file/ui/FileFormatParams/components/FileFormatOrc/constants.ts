import { prepareOptionsForSelect } from '@shared/ui';

import { FileCompression, Orc } from '../../../../types';

export const ORC_COMPRESSION_SELECT_OPTIONS = prepareOptionsForSelect<Orc['compression']>({
  data: [FileCompression.LZ4, FileCompression.SNAPPY, FileCompression.ZLIB],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

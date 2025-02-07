import { prepareOptionsForSelect } from '@shared/ui';

import { FileCompression, Xml } from '../../../../types';

export const FILE_XML_COMPRESSION_SELECT_OPTIONS = prepareOptionsForSelect<Xml['compression']>({
  data: [FileCompression.BZIP2, FileCompression.GZIP, FileCompression.LZ4, FileCompression.SNAPPY],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

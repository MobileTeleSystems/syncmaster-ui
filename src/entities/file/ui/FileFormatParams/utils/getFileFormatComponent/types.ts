import { TransferConnectionParamFieldName } from '@entities/transfer/@x/file';

import { FileFormatType } from '../../../../types';

export interface GetFileFormatComponentProps {
  name: [TransferConnectionParamFieldName, 'file_format'];
  fileFormatType: FileFormatType;
}

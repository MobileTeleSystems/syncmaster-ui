import { TransferConnectionParamFieldName } from '@entities/transfer/@x/file';

export interface FileFormatFieldName {
  name: [TransferConnectionParamFieldName, 'file_format'];
}

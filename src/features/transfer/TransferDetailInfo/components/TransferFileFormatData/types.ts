import { FileFormat } from '@entities/file';
import { DescriptionsProps } from 'antd';

export interface TransferFileFormatDataProps extends DescriptionsProps {
  data: FileFormat;
}

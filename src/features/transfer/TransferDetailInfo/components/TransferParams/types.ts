import { Connection } from '@entities/connection';
import { Transfer } from '@entities/transfer';
import { DescriptionsProps } from 'antd';

export interface TransferParamsProps extends DescriptionsProps {
  connection: Connection;
  data: Transfer['source_params'] | Transfer['target_params'];
}

import { Transfer } from '@entities/transfer';
import { DescriptionsProps } from 'antd';

export interface TransferParamsProps extends DescriptionsProps {
  data: Transfer['source_params'] | Transfer['target_params'];
}

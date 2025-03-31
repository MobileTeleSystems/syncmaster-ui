import { Transfer } from '@entities/transfer';
import { DescriptionsProps } from 'antd';

export interface TransferResourcesProps extends DescriptionsProps {
  data: Transfer['resources'];
}

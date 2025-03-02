import { Transfer } from '@entities/transfer';
import { DescriptionsProps } from 'antd';

export interface TransferStrategyParamsProps extends DescriptionsProps {
  data: Transfer['strategy_params'];
}

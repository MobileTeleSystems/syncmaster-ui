import { Run } from '@entities/run';
import { Transfer } from '@entities/transfer';
import { DescriptionsProps } from 'antd';

export interface RunDetailInfoProps extends DescriptionsProps {
  run: Run;
  transfer: Transfer;
}

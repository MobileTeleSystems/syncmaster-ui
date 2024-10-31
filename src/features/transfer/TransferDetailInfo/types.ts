import { Transfer } from '@entities/transfer';
import { GroupData } from '@entities/group';
import { DescriptionsProps } from 'antd';
import { Connection } from '@entities/connection';
import { Queue } from '@entities/queue';

export interface TransferDetailInfoProps extends DescriptionsProps {
  transfer: Transfer;
  group: GroupData;
  connectionSource: Connection;
  connectionTarget: Connection;
  queue: Queue;
}

import { Connection } from '@entities/connection';
import { Group } from '@entities/group';
import { Queue } from '@entities/queue';
import { Transfer } from '@entities/transfer';

export interface TransferDetailProps {
  transfer: Transfer;
  group: Group;
  connectionSource: Connection;
  connectionTarget: Connection;
  queue: Queue;
}

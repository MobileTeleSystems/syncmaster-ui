import { Group } from '@entities/group';
import { Transfer } from '@entities/transfer';

export interface TransferListProps {
  group: Group;
  onDeleteRowClick: (transfer: Transfer) => void;
}

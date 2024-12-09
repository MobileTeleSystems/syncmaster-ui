import { Group } from '@entities/group';
import { Transfer } from '@entities/transfer';

export interface TransferListProps {
  group: Group;
  onUpdateRowClick: (transfer: Transfer) => void;
  onDeleteRowClick: (transfer: Transfer) => void;
}

import { Transfer } from '@entities/transfer';

export interface DeleteTransferProps {
  transfer: Transfer;
  onSuccess: () => void;
  onCancel: () => void;
}

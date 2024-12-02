import { Connection } from '@entities/connection';

export interface DeleteConnectionProps {
  connection: Connection;
  onSuccess: () => void;
  onCancel: () => void;
}

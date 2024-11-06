import { Group } from '@entities/group';

export interface TransferRunsProps {
  group: Group;
  transferId: number;
  transferName: string;
}

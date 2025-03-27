import { GetTabsItemsProps } from './utils';

export interface TransferConnectionsProps extends Omit<GetTabsItemsProps, 't'> {}

export enum TransferConnectionsTab {
  BASIC = 'BASIC',
  ADVANCED = 'ADVANCED',
}

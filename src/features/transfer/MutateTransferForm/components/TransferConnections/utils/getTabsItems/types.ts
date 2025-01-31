import { ConnectionType } from '@shared/types';

export interface GetTabsItemsProps {
  groupId: number;
  initialSourceConnectionType?: ConnectionType;
  initialTargetConnectionType?: ConnectionType;
}

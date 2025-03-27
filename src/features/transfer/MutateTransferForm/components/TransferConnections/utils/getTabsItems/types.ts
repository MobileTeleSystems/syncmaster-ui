import { ConnectionType } from '@shared/types';
import { TFunction } from 'i18next';

export interface GetTabsItemsProps {
  t: TFunction<'transfer'>;
  groupId: number;
  initialSourceConnectionType?: ConnectionType;
  initialTargetConnectionType?: ConnectionType;
}

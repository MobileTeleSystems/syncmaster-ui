import { ConnectionType } from '@shared/types';

import { ConnectionParamFieldName } from '../../types';

export interface UseSelectConnectionTypeProps {
  connectionParamFieldName: ConnectionParamFieldName['name'];
  initialConnectionType?: ConnectionType;
}

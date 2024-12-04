import { ConnectionHive } from '../../api';

import { AdaptConnectionHiveProps } from './types';

/* Util for creating a ConnectionData object for "Hive" connection by its fields */
export const adaptConnectionHive = (data: AdaptConnectionHiveProps): ConnectionHive => {
  return {
    auth_data: {
      type: data.type,
      user: data.user,
      password: data.password,
    },
    connection_data: {
      type: data.type,
      cluster: data.cluster,
    },
  };
};

import { ConnectionClickhouse } from '../../api';

import { AdaptConnectionClickhouseProps } from './types';

/* Util for creating a ConnectionData object for "Clickhouse" connection by its fields */
export const adaptConnectionClickhouse = (data: AdaptConnectionClickhouseProps): ConnectionClickhouse => {
  return {
    auth_data: {
      type: data.type,
      user: data.user,
      password: data.password,
    },
    connection_data: {
      type: data.type,
      database_name: data.database_name,
      host: data.host,
      port: data.port,
    },
  };
};

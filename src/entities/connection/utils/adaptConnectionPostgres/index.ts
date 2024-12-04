import { ConnectionPostgres } from '../../api';

import { AdaptConnectionPostgresProps } from './types';

/* Util for creating a ConnectionData object for "Postgres" connection by its fields */
export const adaptConnectionPostgres = (data: AdaptConnectionPostgresProps): ConnectionPostgres => {
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

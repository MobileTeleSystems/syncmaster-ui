import { ConnectionMySql } from '../../api';

import { AdaptConnectionMySqlProps } from './types';

/* Util for creating a ConnectionData object for "MySQL" connection by its fields */
export const adaptConnectionMySql = (data: AdaptConnectionMySqlProps): ConnectionMySql => {
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

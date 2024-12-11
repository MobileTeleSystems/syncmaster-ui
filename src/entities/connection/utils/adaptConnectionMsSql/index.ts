import { ConnectionMsSql } from '../../api';

import { AdaptConnectionMsSqlProps } from './types';

/* Util for creating a ConnectionData object for "MsSQL" connection by its fields */
export const adaptConnectionMsSql = (data: AdaptConnectionMsSqlProps): ConnectionMsSql => {
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

import { ConnectionOracle } from '../../api';

import { AdaptConnectionOracleProps } from './types';

/* Util for creating a ConnectionData object for "Oracle" connection by its fields */
export const adaptConnectionOracle = (data: AdaptConnectionOracleProps): ConnectionOracle => {
  return {
    auth_data: {
      type: data.type,
      user: data.user,
      password: data.password,
    },
    connection_data: {
      type: data.type,
      service_name: data.service_name,
      sid: data.sid,
      host: data.host,
      port: data.port,
    },
  };
};

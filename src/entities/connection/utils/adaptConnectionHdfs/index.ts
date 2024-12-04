import { ConnectionHdfs } from '../../api';

import { AdaptConnectionHdfsProps } from './types';

/* Util for creating a ConnectionData object for "HDFS" connection by its fields */
export const adaptConnectionHdfs = (data: AdaptConnectionHdfsProps): ConnectionHdfs => {
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

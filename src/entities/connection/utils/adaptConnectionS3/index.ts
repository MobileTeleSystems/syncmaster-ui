import { ConnectionS3 } from '../../api';

import { AdaptConnectionS3Props } from './types';

/* Util for creating a ConnectionData object for "S3" connection by its fields */
export const adaptConnectionS3 = (data: AdaptConnectionS3Props): ConnectionS3 => {
  return {
    auth_data: {
      type: data.type,
      access_key: data.access_key,
      secret_key: data.secret_key,
    },
    connection_data: {
      type: data.type,
      bucket_style: data.bucket_style,
      bucket: data.bucket,
      host: data.host,
      protocol: data.protocol,
      port: data.port,
      region: data.region,
    },
  };
};

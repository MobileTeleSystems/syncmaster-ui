import { ConnectionType } from '@shared/types';
import { UpdateConnectionRequest } from '@entities/connection';

import { UpdateConnectionForm } from '../../types';

/* Util for preparing request data for updating connection */
export const adaptUpdateConnectionRequest = (
  values: UpdateConnectionForm,
  connectionId: number,
): UpdateConnectionRequest => {
  const baseRequestData = {
    name: values.name,
    description: values.description,
    id: connectionId,
  };
  switch (values.type) {
    case ConnectionType.HDFS:
      return Object.assign(baseRequestData, {
        auth_data: {
          type: values.type,
          user: values.user,
          password: values.password,
        },
        connection_data: {
          type: values.type,
          cluster: values.cluster,
        },
      });
    case ConnectionType.HIVE:
      return Object.assign(baseRequestData, {
        auth_data: {
          type: values.type,
          user: values.user,
          password: values.password,
        },
        connection_data: {
          type: values.type,
          cluster: values.cluster,
        },
      });
    case ConnectionType.ORACLE:
      return Object.assign(baseRequestData, {
        auth_data: {
          type: values.type,
          user: values.user,
          password: values.password,
        },
        connection_data: {
          type: values.type,
          service_name: values.service_name,
          sid: values.sid,
          host: values.host,
          port: values.port,
        },
      });
    case ConnectionType.POSTGRES:
      return Object.assign(baseRequestData, {
        auth_data: {
          type: values.type,
          user: values.user,
          password: values.password,
        },
        connection_data: {
          type: values.type,
          database_name: values.database_name,
          host: values.host,
          port: values.port,
        },
      });
    case ConnectionType.S3:
      return Object.assign(baseRequestData, {
        auth_data: {
          type: values.type,
          access_key: values.access_key,
          secret_key: values.secret_key,
        },
        connection_data: {
          type: values.type,
          bucket_style: values.bucket_style,
          bucket: values.bucket,
          host: values.host,
          protocol: values.protocol,
          port: values.port,
          region: values.region,
        },
      });
  }
};

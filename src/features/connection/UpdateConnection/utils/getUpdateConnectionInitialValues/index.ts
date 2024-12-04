import { Connection } from '@entities/connection';
import { ConnectionType } from '@shared/types';

import { UpdateConnectionForm } from '../../types';

/* Util for preparing initial data for update connection form */
export const getUpdateConnectionInitialValues = (connection: Connection): UpdateConnectionForm => {
  const baseFormData = {
    name: connection.name,
    description: connection.description,
    id: connection.id,
  };
  // TODO: [DOP-21832] Temporary solution until backend takes ConnectionType up a level in response.
  if (connection.auth_data.type === ConnectionType.HDFS && connection.connection_data.type === ConnectionType.HDFS) {
    return Object.assign(baseFormData, {
      ...connection.connection_data,
      ...connection.auth_data,
    });
  }
  if (connection.auth_data.type === ConnectionType.HIVE && connection.connection_data.type === ConnectionType.HIVE) {
    return Object.assign(baseFormData, {
      ...connection.connection_data,
      ...connection.auth_data,
    });
  }
  if (
    connection.auth_data.type === ConnectionType.ORACLE &&
    connection.connection_data.type === ConnectionType.ORACLE
  ) {
    return Object.assign(baseFormData, {
      ...connection.connection_data,
      ...connection.auth_data,
    });
  }
  if (
    connection.auth_data.type === ConnectionType.POSTGRES &&
    connection.connection_data.type === ConnectionType.POSTGRES
  ) {
    return Object.assign(baseFormData, {
      ...connection.connection_data,
      ...connection.auth_data,
    });
  }
  if (connection.auth_data.type === ConnectionType.S3 && connection.connection_data.type === ConnectionType.S3) {
    return Object.assign(baseFormData, {
      ...connection.connection_data,
      ...connection.auth_data,
    });
  }
  return {
    name: connection.name,
    description: connection.description,
    type: ConnectionType.HDFS,
    cluster: '',
    user: '',
    password: '',
  };
};

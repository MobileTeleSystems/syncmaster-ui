import { Connection } from '@entities/connection';
import { ConnectionType, DescriptionItem } from '@shared/types';

/** Util for mapping connection data for Description component depends on connection type */
export const getConnectionData = (connection: Connection): DescriptionItem[] => {
  const { type, connection_data } = connection;

  switch (type) {
    case ConnectionType.ORACLE:
      return [
        {
          label: connection_data.service_name ? 'Service name' : 'Sid',
          content: connection_data.service_name || connection_data.sid,
        },
        {
          label: 'Host',
          content: connection_data.host,
        },
        {
          label: 'Port',
          content: connection_data.port,
        },
      ];
    case ConnectionType.POSTGRES:
    case ConnectionType.CLICKHOUSE:
    case ConnectionType.MY_SQL:
    case ConnectionType.MS_SQL:
      return [
        {
          label: 'Database name',
          content: connection_data.database_name,
        },
        {
          label: 'Host',
          content: connection_data.host,
        },
        {
          label: 'Port',
          content: connection_data.port,
        },
      ];
    case ConnectionType.S3:
      return [
        {
          label: 'Host',
          content: connection_data.host,
        },
        {
          label: 'Bucket style',
          content: connection_data.bucket_style,
        },
        {
          label: 'Bucket',
          content: connection_data.bucket,
        },
        {
          label: 'Protocol',
          content: connection_data.protocol,
        },
        {
          label: 'Port',
          content: connection_data.port || '',
        },
        {
          label: 'Region',
          content: connection_data.region || '',
        },
      ];
    case ConnectionType.HIVE:
    case ConnectionType.HDFS:
      return [
        {
          label: 'Cluster',
          content: connection_data.cluster,
        },
      ];
  }
};

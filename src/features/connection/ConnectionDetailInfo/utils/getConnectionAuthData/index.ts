import { ConnectionType, DescriptionItem } from '@shared/types';
import { Connection } from '@entities/connection';

/** Util for mapping connection auth data for Description component depends on connection type */
export const getConnectionAuthData = (connection: Connection): DescriptionItem[] => {
  const { type, auth_data } = connection;

  switch (type) {
    case ConnectionType.S3:
      return [
        {
          label: 'Access key',
          content: auth_data.access_key,
        },
      ];
    case ConnectionType.HIVE:
    case ConnectionType.HDFS:
    case ConnectionType.ORACLE:
    case ConnectionType.POSTGRES:
    case ConnectionType.CLICKHOUSE:
    case ConnectionType.MY_SQL:
    case ConnectionType.MS_SQL:
      return [
        {
          label: 'User',
          content: auth_data.user,
        },
      ];
  }
};

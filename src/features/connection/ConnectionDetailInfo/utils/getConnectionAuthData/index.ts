import { ConnectionType, DescriptionItem } from '@shared/types';

import { GetDescriptionItemsProps } from './types';

/** Util for mapping connection auth data for Description component depends on connection type */
export const getConnectionAuthData = ({ data }: GetDescriptionItemsProps): DescriptionItem[] => {
  switch (data.type) {
    case ConnectionType.S3:
      return [
        {
          label: 'Access key',
          content: data.access_key,
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
          content: data.user,
        },
      ];
  }
};

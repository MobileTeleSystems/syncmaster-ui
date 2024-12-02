import { ConnectionType, DescriptionItem } from '@shared/types';

import { GetDescriptionItemsProps } from './types';

/** Util for mapping connection data for Description component depends on connection type */
export const getConnectionData = ({ data }: GetDescriptionItemsProps): DescriptionItem[] => {
  switch (data.type) {
    case ConnectionType.ORACLE:
      return [
        {
          label: data.service_name ? 'Service name' : 'Sid',
          content: data.service_name || data.sid,
        },
        {
          label: 'Host',
          content: data.host,
        },
        {
          label: 'Port',
          content: data.port,
        },
      ];
    case ConnectionType.POSTGRES:
      return [
        {
          label: 'Database name',
          content: data.database_name,
        },
        {
          label: 'Host',
          content: data.host,
        },
        {
          label: 'Port',
          content: data.port,
        },
      ];
    case ConnectionType.S3:
      return [
        {
          label: 'Host',
          content: data.host,
        },
        {
          label: 'Bucket style',
          content: data.bucket_style,
        },
        {
          label: 'Bucket',
          content: data.bucket,
        },
        {
          label: 'Protocol',
          content: data.protocol,
        },
        {
          label: 'Port',
          content: data.port || '',
        },
        {
          label: 'Region',
          content: data.region || '',
        },
      ];
    case ConnectionType.HIVE:
    case ConnectionType.HDFS:
      return [
        {
          label: 'Cluster',
          content: data.cluster,
        },
      ];
  }
};

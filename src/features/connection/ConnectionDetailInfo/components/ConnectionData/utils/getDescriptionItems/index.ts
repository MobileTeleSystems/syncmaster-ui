import { DescriptionItem } from '@shared/types';

import { GetDescriptionItemsProps } from './types';

/** Util for mapping data for Description component depends on connection type */
export const getDescriptionItems = ({ data }: GetDescriptionItemsProps): DescriptionItem[] => {
  switch (data.type) {
    case 'oracle':
      return [
        {
          label: 'Host',
          content: data.host,
        },
        {
          label: 'Port',
          content: data.port,
        },
        {
          label: 'Service name',
          content: data.service_name || '',
        },
        {
          label: 'Sid',
          content: data.sid || '',
        },
      ];
    case 'postgres':
      return [
        {
          label: 'Host',
          content: data.host,
        },
        {
          label: 'Port',
          content: data.port,
        },
        {
          label: 'Database name',
          content: data.database_name,
        },
      ];
    case 's3':
      return [
        {
          label: 'Host',
          content: data.host,
        },
        {
          label: 'Port',
          content: data.port,
        },
        {
          label: 'Bucket',
          content: data.bucket,
        },
        {
          label: 'Bucket style',
          content: data.bucket_style,
        },
        {
          label: 'Protocol',
          content: data.protocol,
        },
        {
          label: 'Region',
          content: data.region || '',
        },
      ];
    default:
      return [
        {
          label: 'Cluster',
          content: data.cluster,
        },
      ];
  }
};

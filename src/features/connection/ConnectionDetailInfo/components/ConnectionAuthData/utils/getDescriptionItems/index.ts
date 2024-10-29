import { DescriptionItem } from '@shared/types';

import { GetDescriptionItemsProps } from './types';

/** Util for mapping data for Description component depends on connection type */
export const getDescriptionItems = ({ data }: GetDescriptionItemsProps): DescriptionItem[] => {
  switch (data.type) {
    case 's3':
      return [
        {
          label: 'Access key',
          content: data.access_key,
        },
      ];
    default:
      return [
        {
          label: 'User',
          content: data.user,
        },
      ];
  }
};

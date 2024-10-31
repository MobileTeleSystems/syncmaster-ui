import { DescriptionItem, FileFormatType } from '@shared/types';

import { GetDescriptionItemsProps } from './types';

/** Util for mapping data for Description component depends on file format type */
export const getDescriptionItems = ({ data }: GetDescriptionItemsProps): DescriptionItem[] => {
  switch (data.type) {
    case FileFormatType.CSV:
      return [
        {
          label: 'Delimiter',
          content: data.delimiter,
        },
        {
          label: 'Encoding',
          content: data.encoding,
        },
        {
          label: 'Quote',
          content: data.quote,
        },
        {
          label: 'Escape',
          content: data.escape,
        },
        {
          label: 'Header',
          content: data.header,
        },
        {
          label: 'Line Sep',
          content: data.line_sep,
        },
      ];
    case FileFormatType.JSON:
    case FileFormatType.JSON_LINE:
      return [
        {
          label: 'Encoding',
          content: data.encoding,
        },
        {
          label: 'Line Sep',
          content: data.line_sep,
        },
      ];
  }
};

import { DescriptionItem } from '@shared/types';
import { FileFormatType } from '@entities/file';

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
          label: 'Include header',
          content: data.include_header ? 'Yes' : 'No',
        },
        {
          label: 'Line separator',
          content: data.line_sep,
        },
        {
          label: 'Compression',
          content: data.compression,
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
          label: 'Line separator',
          content: data.line_sep,
        },
        {
          label: 'Compression',
          content: data.compression,
        },
      ];
    case FileFormatType.EXCEL:
      return [
        {
          label: 'Include header',
          content: data.include_header ? 'Yes' : 'No',
        },
        {
          label: 'Line separator',
          content: data.start_cell ?? '',
        },
      ];
    case FileFormatType.ORC:
    case FileFormatType.PARQUET:
      return [
        {
          label: 'Compression',
          content: data.compression,
        },
      ];
    case FileFormatType.XML:
      return [
        {
          label: 'Root tag',
          content: data.root_tag,
        },
        {
          label: 'Row tag',
          content: data.row_tag,
        },
        {
          label: 'Compression',
          content: data.compression,
        },
      ];
  }
};

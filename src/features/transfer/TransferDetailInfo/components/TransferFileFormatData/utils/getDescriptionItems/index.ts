import { DescriptionItem } from '@shared/types';
import { FileFormatType } from '@entities/file';

import { GetDescriptionItemsProps } from './types';

/** Util for mapping data for Description component depends on file format type */
export const getDescriptionItems = ({ t, data }: GetDescriptionItemsProps): DescriptionItem[] => {
  switch (data.type) {
    case FileFormatType.CSV:
      return [
        {
          label: t('delimiter'),
          content: data.delimiter,
        },
        {
          label: t('encoding'),
          content: data.encoding,
        },
        {
          label: t('quote'),
          content: data.quote,
        },
        {
          label: t('escape'),
          content: data.escape,
        },
        {
          label: t('includeHeader'),
          content: data.include_header ? t('yes', { ns: 'shared' }) : t('no', { ns: 'shared' }),
        },
        {
          label: t('lineSeparator'),
          content: data.line_sep,
        },
        {
          label: t('compression'),
          content: data.compression,
        },
      ];
    case FileFormatType.JSON:
    case FileFormatType.JSON_LINE:
      return [
        {
          label: t('encoding'),
          content: data.encoding,
        },
        {
          label: t('lineSeparator'),
          content: data.line_sep,
        },
        {
          label: t('compression'),
          content: data.compression,
        },
      ];
    case FileFormatType.EXCEL:
      return [
        {
          label: t('includeHeader'),
          content: data.include_header ? t('yes', { ns: 'shared' }) : t('no', { ns: 'shared' }),
        },
        {
          label: t('startCell'),
          content: data.start_cell ?? '',
        },
      ];
    case FileFormatType.ORC:
    case FileFormatType.PARQUET:
      return [
        {
          label: t('compression'),
          content: data.compression,
        },
      ];
    case FileFormatType.XML:
      return [
        {
          label: t('rootTag'),
          content: data.root_tag,
        },
        {
          label: t('rowTag'),
          content: data.row_tag,
        },
        {
          label: t('compression'),
          content: data.compression,
        },
      ];
  }
};

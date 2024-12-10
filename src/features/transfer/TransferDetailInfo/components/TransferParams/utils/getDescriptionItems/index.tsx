import React from 'react';
import { ConnectionType, DescriptionItem } from '@shared/types';

import { TransferFileFormatData } from '../../../TransferFileFormatData';

import { GetDescriptionItemsProps } from './types';

/** Util for mapping data for Description component depends on connection type */
export const getDescriptionItems = ({ data }: GetDescriptionItemsProps): DescriptionItem[] => {
  switch (data.type) {
    case ConnectionType.HDFS:
    case ConnectionType.S3:
      return [
        {
          label: 'Directory path',
          content: data.directory_path,
        },
        {
          label: 'File format',
          content: <TransferFileFormatData data={data.file_format} />,
        },
      ];
    case ConnectionType.HIVE:
    case ConnectionType.ORACLE:
    case ConnectionType.POSTGRES:
    case ConnectionType.CLICKHOUSE:
    case ConnectionType.MY_SQL:
    case ConnectionType.MS_SQL:
      return [
        {
          label: 'Table name',
          content: data.table_name,
        },
      ];
  }
};

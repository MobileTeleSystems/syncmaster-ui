import React from 'react';
import { ConnectionType, DescriptionItem } from '@shared/types';
import { Transfer } from '@entities/transfer';

import { TransferFileFormatData } from '../../../TransferFileFormatData';
import { isTargetParamsFileConnectionType } from '../isTargetParamsFileConnectionType';

import { GetDescriptionItemsProps } from './types';

/** Util for mapping data for Description component depends on connection type */
export const getDescriptionItems = <T extends Transfer['source_params'] | Transfer['target_params']>({
  data,
}: GetDescriptionItemsProps<T>): DescriptionItem[] => {
  switch (data.type) {
    case ConnectionType.FTP:
    case ConnectionType.FTPS:
    case ConnectionType.SFTP:
    case ConnectionType.WEBDAV:
    case ConnectionType.SAMBA:
    case ConnectionType.HDFS:
    case ConnectionType.S3:
      const items: DescriptionItem[] = [
        {
          label: 'Directory path',
          content: data.directory_path,
        },
      ];
      if (isTargetParamsFileConnectionType(data)) {
        items.push({
          label: 'Filename template',
          content: data.file_name_template,
        });
      }
      items.push({
        label: 'File format',
        content: <TransferFileFormatData data={data.file_format} />,
      });

      return items;
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

import React from 'react';
import { ConnectionType, DescriptionItem } from '@shared/types';
import { Transfer } from '@entities/transfer';

import { TransferFileFormatData } from '../../../TransferFileFormatData';
import { isTargetParamsFileConnectionType } from '../isTargetParamsFileConnectionType';

import { GetDescriptionItemsProps } from './types';

/** Util for mapping data for Description component depends on connection type */
export const getDescriptionItems = <T extends Transfer['source_params'] | Transfer['target_params']>({
  data,
  t,
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
          label: t('directoryPath', { ns: 'transfer' }),
          content: data.directory_path,
        },
      ];
      if (isTargetParamsFileConnectionType(data)) {
        items.push({
          label: t('filenameTemplate', { ns: 'file' }),
          content: data.file_name_template,
        });
      }
      items.push({
        label: t('fileFormat', { ns: 'file' }),
        content: <TransferFileFormatData data={data.file_format} />,
      });

      return items;
    case ConnectionType.CLICKHOUSE:
    case ConnectionType.HIVE:
    case ConnectionType.ICEBERG:
    case ConnectionType.MSSQL:
    case ConnectionType.MYSQL:
    case ConnectionType.ORACLE:
    case ConnectionType.POSTGRES:
      return [
        {
          label: t('tableName', { ns: 'transfer' }),
          content: data.table_name,
        },
      ];
  }
};

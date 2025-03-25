import { Connection } from '@entities/connection';
import { ConnectionType, DescriptionItem } from '@shared/types';
import { TFunction } from 'i18next';

/** Util for mapping connection data for Description component depends on connection type */
export const getConnectionData = (connection: Connection, t: TFunction<'connection'>): DescriptionItem[] => {
  const { type, connection_data } = connection;

  switch (type) {
    case ConnectionType.FTP:
    case ConnectionType.FTPS:
    case ConnectionType.SFTP:
      return [
        {
          label: t('host'),
          content: connection_data.host,
        },
        {
          label: t('port'),
          content: connection_data.port,
        },
      ];
    case ConnectionType.WEBDAV:
      return [
        {
          label: t('host'),
          content: connection_data.host,
        },
        {
          label: t('protocol'),
          content: connection_data.protocol,
        },
        {
          label: t('port'),
          content: connection_data.port || '',
        },
      ];
    case ConnectionType.SAMBA:
      return [
        {
          label: t('host'),
          content: connection_data.host,
        },
        {
          label: t('share'),
          content: connection_data.share,
        },
        {
          label: t('protocol'),
          content: connection_data.protocol,
        },
        {
          label: t('port'),
          content: connection_data.port || '',
        },
        {
          label: t('domain'),
          content: connection_data.domain,
        },
      ];
    case ConnectionType.ORACLE:
      return [
        {
          label: connection_data.service_name ? t('serviceName') : t('sid'),
          content: connection_data.service_name || connection_data.sid,
        },
        {
          label: t('host'),
          content: connection_data.host,
        },
        {
          label: t('port'),
          content: connection_data.port,
        },
      ];
    case ConnectionType.POSTGRES:
    case ConnectionType.CLICKHOUSE:
    case ConnectionType.MY_SQL:
    case ConnectionType.MS_SQL:
      return [
        {
          label: t('databaseName'),
          content: connection_data.database_name || '',
        },
        {
          label: t('host'),
          content: connection_data.host,
        },
        {
          label: t('port'),
          content: connection_data.port,
        },
      ];
    case ConnectionType.S3:
      return [
        {
          label: t('host'),
          content: connection_data.host,
        },
        {
          label: t('bucketStyle'),
          content: connection_data.bucket_style,
        },
        {
          label: t('bucket'),
          content: connection_data.bucket,
        },
        {
          label: t('protocol'),
          content: connection_data.protocol,
        },
        {
          label: t('port'),
          content: connection_data.port || '',
        },
        {
          label: t('region'),
          content: connection_data.region || '',
        },
      ];
    case ConnectionType.HIVE:
    case ConnectionType.HDFS:
      return [
        {
          label: t('cluster'),
          content: connection_data.cluster,
        },
      ];
  }
};

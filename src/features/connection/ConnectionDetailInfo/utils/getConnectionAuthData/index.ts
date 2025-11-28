import { ConnectionType, DescriptionItem } from '@shared/types';
import { Connection } from '@entities/connection';
import { TFunction } from 'i18next';

/** Util for mapping connection auth data for Description component depends on connection type */
export const getConnectionAuthData = (connection: Connection, t: TFunction<'connection'>): DescriptionItem[] => {
  const { type, auth_data } = connection;

  switch (type) {
    case ConnectionType.S3:
      return [
        {
          label: t('s3.accessKey'),
          content: auth_data.access_key,
        },
      ];
    case ConnectionType.SAMBA:
      return [
        {
          label: t('username', { ns: 'auth' }),
          content: auth_data.user,
        },
        {
          label: t('samba.authType'),
          content: auth_data.auth_type,
        },
      ];
    case ConnectionType.FTP:
    case ConnectionType.FTPS:
    case ConnectionType.SFTP:
    case ConnectionType.WEBDAV:
    case ConnectionType.HIVE:
    case ConnectionType.HDFS:
    case ConnectionType.ORACLE:
    case ConnectionType.POSTGRES:
    case ConnectionType.CLICKHOUSE:
    case ConnectionType.MY_SQL:
    case ConnectionType.MS_SQL:
      return [
        {
          label: t('username', { ns: 'auth' }),
          content: auth_data.user,
        },
      ];
  }
};

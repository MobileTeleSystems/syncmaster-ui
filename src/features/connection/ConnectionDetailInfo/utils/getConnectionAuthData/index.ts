import { ConnectionType, DescriptionItem } from '@shared/types';
import { Connection, ConnectionAuthType } from '@entities/connection';
import { TFunction } from 'i18next';

/** Util for mapping connection auth data for Description component depends on connection type */
export const getConnectionAuthData = (connection: Connection, t: TFunction<'connection'>): DescriptionItem[] => {
  const { type, auth_data } = connection;

  switch (type) {
    case ConnectionType.CLICKHOUSE:
    case ConnectionType.FTP:
    case ConnectionType.FTPS:
    case ConnectionType.HDFS:
    case ConnectionType.HIVE:
    case ConnectionType.MSSQL:
    case ConnectionType.MYSQL:
    case ConnectionType.ORACLE:
    case ConnectionType.POSTGRES:
    case ConnectionType.SFTP:
    case ConnectionType.WEBDAV:
      return [
        {
          label: t('username', { ns: 'auth' }),
          content: auth_data.user,
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
    case ConnectionType.S3:
      return [
        {
          label: t('s3.accessKey'),
          content: auth_data.access_key,
        },
      ];
    case ConnectionType.ICEBERG:
      const result: DescriptionItem[] = [];
      if (
        auth_data.type == ConnectionAuthType.ICEBERG_REST_OAUTH2_CLIENT_CREDENTIALS ||
        auth_data.type == ConnectionAuthType.ICEBERG_REST_OAUTH2_CLIENT_CREDENTIALS_S3_BASIC
      ) {
        result.push({
          label: t('iceberg.oauth2ClientId'),
          content: auth_data.rest_catalog_oauth2_client_id,
        });
      }
      if (
        auth_data.type == ConnectionAuthType.ICEBERG_REST_BEARER_S3_BASIC ||
        auth_data.type == ConnectionAuthType.ICEBERG_REST_OAUTH2_CLIENT_CREDENTIALS_S3_BASIC
      ) {
        result.push({
          label: t('s3.accessKey'),
          content: auth_data.s3_access_key,
        });
      }
      return result;
  }
};

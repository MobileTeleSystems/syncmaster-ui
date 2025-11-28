import { Connection, ConnectionIcebergConnectionType } from '@entities/connection';
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
          label: t('protocol'),
          content: connection_data.protocol,
        },
        {
          label: t('port'),
          content: connection_data.port || '',
        },
        {
          label: t('samba.share'),
          content: connection_data.share,
        },
        {
          label: t('samba.domain'),
          content: connection_data.domain,
        },
      ];
    case ConnectionType.ORACLE:
      return [
        {
          label: t('host'),
          content: connection_data.host,
        },
        {
          label: t('port'),
          content: connection_data.port,
        },
        {
          label: connection_data.service_name ? t('oracle.serviceName') : t('oracle.sid'),
          content: connection_data.service_name || connection_data.sid,
        },
      ];
    case ConnectionType.CLICKHOUSE:
    case ConnectionType.MYSQL:
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
    case ConnectionType.POSTGRES:
    case ConnectionType.MSSQL:
      return [
        {
          label: t('host'),
          content: connection_data.host,
        },
        {
          label: t('port'),
          content: connection_data.port,
        },
        {
          label: t('databaseName'),
          content: connection_data.database_name,
        },
      ];
    case ConnectionType.S3:
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
        {
          label: t('s3.bucketStyle'),
          content: connection_data.bucket_style,
        },
        {
          label: t('s3.bucket'),
          content: connection_data.bucket,
        },
        {
          label: t('s3.region'),
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
    case ConnectionType.ICEBERG:
      const result: DescriptionItem[] = [
        {
          label: t('iceberg.restCatalogUrl'),
          content: connection_data.rest_catalog_url,
        },
      ];
      if (connection_data.type == ConnectionIcebergConnectionType.ICEBERG_REST_S3_DIRECT) {
        result.push({
          label: t('s3.name') + ' ' + t('iceberg.warehousePath'),
          content: connection_data.s3_warehouse_path,
        });
        result.push({
          label: t('s3.name') + ' ' + t('host'),
          content: connection_data.s3_host,
        });
        result.push({
          label: t('s3.name') + ' ' + t('protocol'),
          content: connection_data.s3_protocol,
        });
        result.push({
          label: t('s3.name') + ' ' + t('port'),
          content: connection_data.s3_port || '',
        });
        result.push({
          label: t('s3.name') + ' ' + t('s3.bucketStyle'),
          content: connection_data.s3_bucket_style,
        });
        result.push({
          label: t('s3.name') + ' ' + t('s3.bucket'),
          content: connection_data.s3_bucket,
        });
        result.push({
          label: t('s3.name') + ' ' + t('s3.region'),
          content: connection_data.s3_region || '',
        });
      } else {
        result.push({
          label: t('iceberg.restCatalog') + ' ' + t('iceberg.warehouseName'),
          content: connection_data.s3_warehouse_name || '',
        });
        result.push({
          label: t('s3.name') + ' ' + t('s3.accessDelegation'),
          content: connection_data.s3_access_delegation,
        });
      }
      return result;
  }
};

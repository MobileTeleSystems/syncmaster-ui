import React, { ReactNode } from 'react';
import { ConnectionType } from '@shared/types';
import { prepareOptionsForSelect } from '@shared/ui';

import {
  ClickhouseIcon,
  FtpIcon,
  HdfsIcon,
  HiveIcon,
  MssqlIcon,
  MysqlIcon,
  OracleIcon,
  PostgresIcon,
  S3Icon,
  SambaIcon,
  SftpIcon,
  WebDavIcon,
} from './assets';
import { ConnectionBucketStyle, ConnectionProtocol } from './api';

export const CONNECTION_TYPE_NAMES: Record<ConnectionType, string> = {
  [ConnectionType.FTP]: 'FTP',
  [ConnectionType.FTPS]: 'FTPS',
  [ConnectionType.SFTP]: 'SFTP',
  [ConnectionType.WEBDAV]: 'WebDAV',
  [ConnectionType.SAMBA]: 'Samba',
  [ConnectionType.HDFS]: 'HDFS',
  [ConnectionType.S3]: 'S3',
  [ConnectionType.CLICKHOUSE]: 'ClickHouse',
  [ConnectionType.HIVE]: 'Hive',
  [ConnectionType.MS_SQL]: 'MSSQL',
  [ConnectionType.MY_SQL]: 'MySQL',
  [ConnectionType.ORACLE]: 'Oracle',
  [ConnectionType.POSTGRES]: 'Postgres',
};

export const CONNECTION_ICONS: Record<ConnectionType, ReactNode> = {
  [ConnectionType.FTP]: <FtpIcon />,
  [ConnectionType.FTPS]: <FtpIcon />,
  [ConnectionType.SFTP]: <SftpIcon />,
  [ConnectionType.WEBDAV]: <WebDavIcon />,
  [ConnectionType.SAMBA]: <SambaIcon />,
  [ConnectionType.HDFS]: <HdfsIcon />,
  [ConnectionType.S3]: <S3Icon />,
  [ConnectionType.CLICKHOUSE]: <ClickhouseIcon />,
  [ConnectionType.HIVE]: <HiveIcon />,
  [ConnectionType.MS_SQL]: <MssqlIcon />,
  [ConnectionType.MY_SQL]: <MysqlIcon />,
  [ConnectionType.ORACLE]: <OracleIcon />,
  [ConnectionType.POSTGRES]: <PostgresIcon />,
};

export const CONNECTION_TYPE_SELECT_OPTIONS = prepareOptionsForSelect({
  data: [
    { value: ConnectionType.CLICKHOUSE, label: CONNECTION_TYPE_NAMES[ConnectionType.CLICKHOUSE] },
    { value: ConnectionType.FTP, label: CONNECTION_TYPE_NAMES[ConnectionType.FTP] },
    { value: ConnectionType.FTPS, label: CONNECTION_TYPE_NAMES[ConnectionType.FTPS] },
    { value: ConnectionType.HDFS, label: CONNECTION_TYPE_NAMES[ConnectionType.HDFS] },
    { value: ConnectionType.HIVE, label: CONNECTION_TYPE_NAMES[ConnectionType.HIVE] },
    { value: ConnectionType.MS_SQL, label: CONNECTION_TYPE_NAMES[ConnectionType.MS_SQL] },
    { value: ConnectionType.MY_SQL, label: CONNECTION_TYPE_NAMES[ConnectionType.MY_SQL] },
    { value: ConnectionType.ORACLE, label: CONNECTION_TYPE_NAMES[ConnectionType.ORACLE] },
    { value: ConnectionType.POSTGRES, label: CONNECTION_TYPE_NAMES[ConnectionType.POSTGRES] },
    { value: ConnectionType.SAMBA, label: CONNECTION_TYPE_NAMES[ConnectionType.SAMBA] },
    { value: ConnectionType.SFTP, label: CONNECTION_TYPE_NAMES[ConnectionType.SFTP] },
    { value: ConnectionType.S3, label: CONNECTION_TYPE_NAMES[ConnectionType.S3] },
    { value: ConnectionType.WEBDAV, label: CONNECTION_TYPE_NAMES[ConnectionType.WEBDAV] },
  ],
  renderLabel: (data) => data.label,
  renderValue: (data) => data.value,
});

export const CONNECTION_BUCKET_STYLE_SELECT_OPTIONS = prepareOptionsForSelect<ConnectionBucketStyle>({
  data: ['domain', 'path'],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

export const CONNECTION_PROTOCOL_SELECT_OPTIONS = prepareOptionsForSelect<ConnectionProtocol>({
  data: ['https', 'http'],
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

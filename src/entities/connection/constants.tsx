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
  [ConnectionType.CLICKHOUSE]: 'ClickHouse',
  [ConnectionType.FTP]: 'FTP',
  [ConnectionType.FTPS]: 'FTPS',
  [ConnectionType.HDFS]: 'HDFS',
  [ConnectionType.HIVE]: 'Hive',
  [ConnectionType.MSSQL]: 'MSSQL',
  [ConnectionType.MYSQL]: 'MySQL',
  [ConnectionType.ORACLE]: 'Oracle',
  [ConnectionType.POSTGRES]: 'Postgres',
  [ConnectionType.S3]: 'S3',
  [ConnectionType.SAMBA]: 'Samba',
  [ConnectionType.SFTP]: 'SFTP',
  [ConnectionType.WEBDAV]: 'WebDAV',
};

export const CONNECTION_ICONS: Record<ConnectionType, ReactNode> = {
  [ConnectionType.CLICKHOUSE]: <ClickhouseIcon />,
  [ConnectionType.FTP]: <FtpIcon />,
  [ConnectionType.FTPS]: <FtpIcon />,
  [ConnectionType.HDFS]: <HdfsIcon />,
  [ConnectionType.HIVE]: <HiveIcon />,
  [ConnectionType.MSSQL]: <MssqlIcon />,
  [ConnectionType.MYSQL]: <MysqlIcon />,
  [ConnectionType.ORACLE]: <OracleIcon />,
  [ConnectionType.POSTGRES]: <PostgresIcon />,
  [ConnectionType.S3]: <S3Icon />,
  [ConnectionType.SAMBA]: <SambaIcon />,
  [ConnectionType.SFTP]: <SftpIcon />,
  [ConnectionType.WEBDAV]: <WebDavIcon />,
};

export const CONNECTION_TYPE_SELECT_OPTIONS = prepareOptionsForSelect({
  data: [
    { value: ConnectionType.CLICKHOUSE, label: CONNECTION_TYPE_NAMES[ConnectionType.CLICKHOUSE] },
    { value: ConnectionType.FTP, label: CONNECTION_TYPE_NAMES[ConnectionType.FTP] },
    { value: ConnectionType.FTPS, label: CONNECTION_TYPE_NAMES[ConnectionType.FTPS] },
    { value: ConnectionType.HDFS, label: CONNECTION_TYPE_NAMES[ConnectionType.HDFS] },
    { value: ConnectionType.HIVE, label: CONNECTION_TYPE_NAMES[ConnectionType.HIVE] },
    { value: ConnectionType.MSSQL, label: CONNECTION_TYPE_NAMES[ConnectionType.MSSQL] },
    { value: ConnectionType.MYSQL, label: CONNECTION_TYPE_NAMES[ConnectionType.MYSQL] },
    { value: ConnectionType.ORACLE, label: CONNECTION_TYPE_NAMES[ConnectionType.ORACLE] },
    { value: ConnectionType.POSTGRES, label: CONNECTION_TYPE_NAMES[ConnectionType.POSTGRES] },
    { value: ConnectionType.S3, label: CONNECTION_TYPE_NAMES[ConnectionType.S3] },
    { value: ConnectionType.SAMBA, label: CONNECTION_TYPE_NAMES[ConnectionType.SAMBA] },
    { value: ConnectionType.SFTP, label: CONNECTION_TYPE_NAMES[ConnectionType.SFTP] },
    { value: ConnectionType.WEBDAV, label: CONNECTION_TYPE_NAMES[ConnectionType.WEBDAV] },
  ],
  renderLabel: (data) => data.label,
  renderValue: (data) => data.value,
});

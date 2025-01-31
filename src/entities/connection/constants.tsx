import React, { ReactNode } from 'react';
import { ConnectionType } from '@shared/types';
import { prepareOptionsForSelect } from '@shared/ui';

import { ClickhouseIcon, HdfsIcon, HiveIcon, MssqlIcon, MysqlIcon, OracleIcon, PostgresIcon, S3Icon } from './assets';
import { ConnectionBucketStyle, ConnectionProtocol } from './api';

export const CONNECTION_TYPE_NAMES: Record<ConnectionType, string> = {
  [ConnectionType.CLICKHOUSE]: 'ClickHouse',
  [ConnectionType.HDFS]: 'HDFS',
  [ConnectionType.HIVE]: 'Hive',
  [ConnectionType.MS_SQL]: 'MSSQL',
  [ConnectionType.MY_SQL]: 'MySQL',
  [ConnectionType.ORACLE]: 'Oracle',
  [ConnectionType.POSTGRES]: 'Postgres',
  [ConnectionType.S3]: 'S3',
};

export const CONNECTION_ICONS: Record<ConnectionType, ReactNode> = {
  [ConnectionType.CLICKHOUSE]: <ClickhouseIcon />,
  [ConnectionType.HDFS]: <HdfsIcon />,
  [ConnectionType.HIVE]: <HiveIcon />,
  [ConnectionType.MS_SQL]: <MssqlIcon />,
  [ConnectionType.MY_SQL]: <MysqlIcon />,
  [ConnectionType.ORACLE]: <OracleIcon />,
  [ConnectionType.POSTGRES]: <PostgresIcon />,
  [ConnectionType.S3]: <S3Icon />,
};

export const CONNECTION_TYPE_SELECT_OPTIONS = prepareOptionsForSelect({
  data: [
    { value: ConnectionType.CLICKHOUSE, label: CONNECTION_TYPE_NAMES[ConnectionType.CLICKHOUSE] },
    { value: ConnectionType.HDFS, label: CONNECTION_TYPE_NAMES[ConnectionType.HDFS] },
    { value: ConnectionType.HIVE, label: CONNECTION_TYPE_NAMES[ConnectionType.HIVE] },
    { value: ConnectionType.MS_SQL, label: CONNECTION_TYPE_NAMES[ConnectionType.MS_SQL] },
    { value: ConnectionType.MY_SQL, label: CONNECTION_TYPE_NAMES[ConnectionType.MY_SQL] },
    { value: ConnectionType.ORACLE, label: CONNECTION_TYPE_NAMES[ConnectionType.ORACLE] },
    { value: ConnectionType.POSTGRES, label: CONNECTION_TYPE_NAMES[ConnectionType.POSTGRES] },
    { value: ConnectionType.S3, label: CONNECTION_TYPE_NAMES[ConnectionType.S3] },
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

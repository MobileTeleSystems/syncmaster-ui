import React from 'react';
import { ConnectionType } from '@shared/types';

import { ClickhouseIcon, HdfsIcon, HiveIcon, MssqlIcon, MysqlIcon, OracleIcon, PostgresIcon, S3Icon } from './assets';
import { ConnectionIconProps } from './types';

export const ConnectionIcon = ({ type }: ConnectionIconProps) => {
  switch (type) {
    case ConnectionType.CLICKHOUSE:
      return <ClickhouseIcon />;
    case ConnectionType.HDFS:
      return <HdfsIcon />;
    case ConnectionType.HIVE:
      return <HiveIcon />;
    case ConnectionType.MS_SQL:
      return <MssqlIcon />;
    case ConnectionType.MY_SQL:
      return <MysqlIcon />;
    case ConnectionType.ORACLE:
      return <OracleIcon />;
    case ConnectionType.POSTGRES:
      return <PostgresIcon />;
    case ConnectionType.S3:
      return <S3Icon />;
    default:
      return null;
  }
};

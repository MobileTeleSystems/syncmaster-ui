import { ConnectionType } from '@shared/types';
import {
  adaptConnectionClickhouse,
  adaptConnectionHdfs,
  adaptConnectionHive,
  adaptConnectionMsSql,
  adaptConnectionMySql,
  adaptConnectionOracle,
  adaptConnectionPostgres,
  adaptConnectionS3,
  ConnectionData,
} from '@entities/connection';

import { AdaptConnectionTypeRequestProps } from './types';

/* Util for for creating ConnectionData object for preparing request data for creating/updating connection */
export const adaptConnectionTypeRequest = (values: AdaptConnectionTypeRequestProps): ConnectionData => {
  switch (values.type) {
    case ConnectionType.HDFS:
      return adaptConnectionHdfs(values);
    case ConnectionType.HIVE:
      return adaptConnectionHive(values);
    case ConnectionType.ORACLE:
      return adaptConnectionOracle(values);
    case ConnectionType.POSTGRES:
      return adaptConnectionPostgres(values);
    case ConnectionType.CLICKHOUSE:
      return adaptConnectionClickhouse(values);
    case ConnectionType.MY_SQL:
      return adaptConnectionMySql(values);
    case ConnectionType.MS_SQL:
      return adaptConnectionMsSql(values);
    case ConnectionType.S3:
      return adaptConnectionS3(values);
  }
};

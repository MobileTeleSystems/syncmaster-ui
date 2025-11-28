import React from 'react';
import { createContext } from 'react';
import { ConnectionType } from '@shared/types';

import { SensitiveFieldsContextProps } from './types';
import {
  ConnectionClickhouse,
  ConnectionFtp,
  ConnectionFtps,
  ConnectionHdfs,
  ConnectionHive,
  ConnectionMsSql,
  ConnectionMySql,
  ConnectionOracle,
  ConnectionPostgres,
  ConnectionS3,
  ConnectionSamba,
  ConnectionSftp,
  ConnectionWebdav,
} from './components';

const SENSITIVE_FIELDS_CONTEXT_INITIAL_VALUE: SensitiveFieldsContextProps = {
  isRequired: true,
};

export const SensitiveFieldsContext = createContext<SensitiveFieldsContextProps>(
  SENSITIVE_FIELDS_CONTEXT_INITIAL_VALUE,
);

export const MIN_ALLOWED_PORT = 1;
export const MAX_ALLOWED_PORT = 65535;

export const CONNECTION_TYPE_COMPONENT = {
  [ConnectionType.FTP]: <ConnectionFtp />,
  [ConnectionType.FTPS]: <ConnectionFtps />,
  [ConnectionType.HDFS]: <ConnectionHdfs />,
  [ConnectionType.S3]: <ConnectionS3 />,
  [ConnectionType.SAMBA]: <ConnectionSamba />,
  [ConnectionType.SFTP]: <ConnectionSftp />,
  [ConnectionType.WEBDAV]: <ConnectionWebdav />,
  [ConnectionType.CLICKHOUSE]: <ConnectionClickhouse />,
  [ConnectionType.HIVE]: <ConnectionHive />,
  [ConnectionType.MSSQL]: <ConnectionMsSql />,
  [ConnectionType.MYSQL]: <ConnectionMySql />,
  [ConnectionType.ORACLE]: <ConnectionOracle />,
  [ConnectionType.POSTGRES]: <ConnectionPostgres />,
};

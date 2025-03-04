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
  [ConnectionType.SFTP]: <ConnectionSftp />,
  [ConnectionType.WEBDAV]: <ConnectionWebdav />,
  [ConnectionType.SAMBA]: <ConnectionSamba />,
  [ConnectionType.HDFS]: <ConnectionHdfs />,
  [ConnectionType.S3]: <ConnectionS3 />,
  [ConnectionType.HIVE]: <ConnectionHive />,
  [ConnectionType.ORACLE]: <ConnectionOracle />,
  [ConnectionType.POSTGRES]: <ConnectionPostgres />,
  [ConnectionType.CLICKHOUSE]: <ConnectionClickhouse />,
  [ConnectionType.MY_SQL]: <ConnectionMySql />,
  [ConnectionType.MS_SQL]: <ConnectionMsSql />,
};

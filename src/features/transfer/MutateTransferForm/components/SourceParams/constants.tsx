import React from 'react';
import { ConnectionType } from '@shared/types';

import { TransferConnectionHdfs } from '../TransferConnectionHdfs';
import { TransferConnectionHive } from '../TransferConnectionHive';
import { TransferConnectionOracle } from '../TransferConnectionOracle';
import { TransferConnectionPostgres } from '../TransferConnectionPostgres';
import { TransferConnectionS3 } from '../TransferConnectionS3';
import { TransferConnectionClickhouse } from '../TransferConnectionClickhouse';
import { TransferConnectionMySql } from '../TransferConnectionMySql';
import { TransferConnectionMsSql } from '../TransferConnectionMsSql';

export const TRANSFER_SOURCE_CONNECTION_TYPE_COMPONENT = {
  [ConnectionType.HDFS]: <TransferConnectionHdfs name="source_params" />,
  [ConnectionType.HIVE]: <TransferConnectionHive name="source_params" />,
  [ConnectionType.ORACLE]: <TransferConnectionOracle name="source_params" />,
  [ConnectionType.POSTGRES]: <TransferConnectionPostgres name="source_params" />,
  [ConnectionType.CLICKHOUSE]: <TransferConnectionClickhouse name="source_params" />,
  [ConnectionType.MY_SQL]: <TransferConnectionMySql name="source_params" />,
  [ConnectionType.MS_SQL]: <TransferConnectionMsSql name="source_params" />,
  [ConnectionType.S3]: <TransferConnectionS3 name="source_params" />,
};

import React from 'react';
import { ConnectionType } from '@shared/types';
import {
  TransferConnectionHdfs,
  TransferConnectionHive,
  TransferConnectionOracle,
  TransferConnectionPostgres,
  TransferConnectionClickhouse,
  TransferConnectionMySql,
  TransferConnectionMsSql,
  TransferConnectionS3,
} from '@entities/transfer';

export const TRANSFER_TARGET_CONNECTION_TYPE_COMPONENT = {
  [ConnectionType.HDFS]: <TransferConnectionHdfs name="target_params" />,
  [ConnectionType.HIVE]: <TransferConnectionHive name="target_params" />,
  [ConnectionType.ORACLE]: <TransferConnectionOracle name="target_params" />,
  [ConnectionType.POSTGRES]: <TransferConnectionPostgres name="target_params" />,
  [ConnectionType.CLICKHOUSE]: <TransferConnectionClickhouse name="target_params" />,
  [ConnectionType.MY_SQL]: <TransferConnectionMySql name="target_params" />,
  [ConnectionType.MS_SQL]: <TransferConnectionMsSql name="target_params" />,
  [ConnectionType.S3]: <TransferConnectionS3 name="target_params" />,
};

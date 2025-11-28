import React from 'react';
import { ConnectionType } from '@shared/types';
import { TransferConnectionFileType, TransferConnectionTableType } from '@entities/transfer';

export const TRANSFER_TARGET_CONNECTION_TYPE_COMPONENT = {
  [ConnectionType.FTP]: <TransferConnectionFileType name="target_params" />,
  [ConnectionType.FTPS]: <TransferConnectionFileType name="target_params" />,
  [ConnectionType.HDFS]: <TransferConnectionFileType name="target_params" />,
  [ConnectionType.S3]: <TransferConnectionFileType name="target_params" />,
  [ConnectionType.SAMBA]: <TransferConnectionFileType name="target_params" />,
  [ConnectionType.SFTP]: <TransferConnectionFileType name="target_params" />,
  [ConnectionType.WEBDAV]: <TransferConnectionFileType name="target_params" />,
  [ConnectionType.CLICKHOUSE]: <TransferConnectionTableType name="target_params" />,
  [ConnectionType.HIVE]: <TransferConnectionTableType name="target_params" />,
  [ConnectionType.ICEBERG]: <TransferConnectionTableType name="target_params" />,
  [ConnectionType.MSSQL]: <TransferConnectionTableType name="target_params" />,
  [ConnectionType.MYSQL]: <TransferConnectionTableType name="target_params" />,
  [ConnectionType.ORACLE]: <TransferConnectionTableType name="target_params" />,
  [ConnectionType.POSTGRES]: <TransferConnectionTableType name="target_params" />,
};

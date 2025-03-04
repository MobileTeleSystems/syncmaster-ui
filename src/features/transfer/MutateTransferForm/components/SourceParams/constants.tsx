import React from 'react';
import { ConnectionType } from '@shared/types';
import { TransferConnectionFileType, TransferConnectionTableType } from '@entities/transfer';

export const TRANSFER_SOURCE_CONNECTION_TYPE_COMPONENT = {
  [ConnectionType.FTP]: <TransferConnectionFileType name="source_params" />,
  [ConnectionType.FTPS]: <TransferConnectionFileType name="source_params" />,
  [ConnectionType.SFTP]: <TransferConnectionFileType name="source_params" />,
  [ConnectionType.WEBDAV]: <TransferConnectionFileType name="source_params" />,
  [ConnectionType.SAMBA]: <TransferConnectionFileType name="source_params" />,
  [ConnectionType.HDFS]: <TransferConnectionFileType name="source_params" />,
  [ConnectionType.S3]: <TransferConnectionFileType name="source_params" />,
  [ConnectionType.HIVE]: <TransferConnectionTableType name="source_params" />,
  [ConnectionType.ORACLE]: <TransferConnectionTableType name="source_params" />,
  [ConnectionType.POSTGRES]: <TransferConnectionTableType name="source_params" />,
  [ConnectionType.CLICKHOUSE]: <TransferConnectionTableType name="source_params" />,
  [ConnectionType.MY_SQL]: <TransferConnectionTableType name="source_params" />,
  [ConnectionType.MS_SQL]: <TransferConnectionTableType name="source_params" />,
};

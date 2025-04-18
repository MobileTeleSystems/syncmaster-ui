import { FileFormat, Json } from '@entities/file/@x/transfer';
import { Transformations } from '@entities/transformation/@x/transfer';
import { ConnectionType, PaginationRequest } from '@shared/types';

export interface Transfer {
  id: number;
  group_id: number;
  name: string;
  source_connection_id: number;
  target_connection_id: number;
  description: string;
  queue_id: number;
  source_params: TransferSourceConnectionFileType | TransferConnectionTableType;
  target_params: TransferTargetConnectionFileType | TransferConnectionTableType;
  strategy_params: TransferStrategyParams;
  is_scheduled: boolean;
  schedule: string;
  resources: TransferResources;
  transformations: Transformations;
}

export type TransferConnectionParamFieldName = 'source_params' | 'target_params';

export enum TransferConnectionFileIncrementBy {
  FILE_MODIFIED_SINCE = 'file_modified_since',
  FILE_NAME = 'file_name',
}

export enum TransferStrategyType {
  FULL = 'full',
  INCREMENTAL = 'incremental',
}

export interface TransferStrategyParams {
  type: TransferStrategyType;
  increment_by?: TransferConnectionFileIncrementBy | string;
}

export interface TransferResources {
  max_parallel_tasks: number;
  cpu_cores_per_task: number;
  ram_bytes_per_task: number | string;
}

export interface TransferSourceConnectionFileType {
  type:
    | ConnectionType.FTP
    | ConnectionType.FTPS
    | ConnectionType.SFTP
    | ConnectionType.HDFS
    | ConnectionType.WEBDAV
    | ConnectionType.SAMBA
    | ConnectionType.S3;
  directory_path: string;
  file_format: FileFormat;
}

export interface TransferTargetConnectionFileType {
  type:
    | ConnectionType.FTP
    | ConnectionType.FTPS
    | ConnectionType.SFTP
    | ConnectionType.HDFS
    | ConnectionType.WEBDAV
    | ConnectionType.SAMBA
    | ConnectionType.S3;
  directory_path: string;
  file_format: Exclude<FileFormat, Json>;
  file_name_template: string;
}

interface TransferConnectionTableType {
  type:
    | ConnectionType.HIVE
    | ConnectionType.CLICKHOUSE
    | ConnectionType.MS_SQL
    | ConnectionType.MY_SQL
    | ConnectionType.ORACLE
    | ConnectionType.POSTGRES;
  table_name: string;
}

export interface GetTransfersRequest extends PaginationRequest {
  group_id: number;
}

export interface GetTransferRequest {
  id: number;
}

export interface CreateTransferRequest extends Omit<Transfer, 'id'> {}

export interface UpdateTransferRequest extends Transfer {}

export interface DeleteTransferRequest {
  id: number;
}

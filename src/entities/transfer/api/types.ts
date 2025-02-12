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
  source_params:
    | TransferParamsHive
    | TransferParamsOracle
    | TransferParamsPostgres
    | TransferParamsClickhouse
    | TransferParamsMsSql
    | TransferParamsMySql
    | TransferSourceParamsHdfs
    | TransferSourceParamsS3;
  target_params:
    | TransferParamsHive
    | TransferParamsOracle
    | TransferParamsPostgres
    | TransferParamsClickhouse
    | TransferParamsMsSql
    | TransferParamsMySql
    | TransferTargetParamsHdfs
    | TransferTargetParamsS3;
  strategy_params: TransferStrategyParams;
  is_scheduled: boolean;
  schedule: string;
  transformations: Transformations;
}

export type TransferConnectionParamFieldName = 'source_params' | 'target_params';

export interface TransferStrategyParams {
  type: 'full' | 'incremental';
}

interface TransferParamsHive {
  type: ConnectionType.HIVE;
  table_name: string;
}

interface TransferParamsOracle {
  type: ConnectionType.ORACLE;
  table_name: string;
}

interface TransferParamsPostgres {
  type: ConnectionType.POSTGRES;
  table_name: string;
}

interface TransferParamsMySql {
  type: ConnectionType.MY_SQL;
  table_name: string;
}

interface TransferParamsMsSql {
  type: ConnectionType.MS_SQL;
  table_name: string;
}

interface TransferParamsClickhouse {
  type: ConnectionType.CLICKHOUSE;
  table_name: string;
}

interface TransferParamsHdfs {
  type: ConnectionType.HDFS;
  directory_path: string;
}

interface TransferSourceParamsHdfs extends TransferParamsHdfs {
  file_format: FileFormat;
}

interface TransferTargetParamsHdfs extends TransferParamsHdfs {
  file_format: Exclude<FileFormat, Json>;
}

interface TransferParamsS3 {
  type: ConnectionType.S3;
  directory_path: string;
}

interface TransferSourceParamsS3 extends TransferParamsS3 {
  file_format: FileFormat;
}

interface TransferTargetParamsS3 extends TransferParamsS3 {
  file_format: Exclude<FileFormat, Json>;
}

export interface GetTransfersRequest extends PaginationRequest {
  group_id: number;
}

export interface GetTransferRequest {
  id: number;
}

export interface CreateTransferRequest extends Omit<Transfer, 'id'> {}

export interface UpdateTransferRequest extends Omit<Transfer, 'group_id'> {}

export interface DeleteTransferRequest {
  id: number;
}

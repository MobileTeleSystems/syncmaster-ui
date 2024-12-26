import { ConnectionType, PaginationRequest } from '@shared/types';

export type Connection = {
  id: number;
  group_id: number;
  name: string;
  description: string;
} & ConnectionData;

export type ConnectionData =
  | ConnectionHive
  | ConnectionHdfs
  | ConnectionOracle
  | ConnectionPostgres
  | ConnectionClickhouse
  | ConnectionMySql
  | ConnectionMsSql
  | ConnectionS3;

export type ConnectionBucketStyle = 'domain' | 'path';

export type ConnectionProtocol = 'https' | 'http';

export enum ConnectionAuthType {
  BASIC = 'basic',
  S3 = 's3',
}

interface ConnectionAuthBasic {
  type: ConnectionAuthType.BASIC;
  user: string;
  password?: string;
}

interface ConnectionAuthS3 {
  type: ConnectionAuthType.S3;
  access_key: string;
  secret_key?: string;
}

export interface ConnectionHive {
  type: ConnectionType.HIVE;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    cluster: string;
  };
}

export interface ConnectionHdfs {
  type: ConnectionType.HDFS;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    cluster: string;
  };
}

export interface ConnectionOracle {
  type: ConnectionType.ORACLE;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number;
    service_name: string | null;
    sid: string | null;
  };
}

export interface ConnectionPostgres {
  type: ConnectionType.POSTGRES;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number;
    database_name: string;
  };
}

export interface ConnectionClickhouse {
  type: ConnectionType.CLICKHOUSE;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number;
    database_name: string;
  };
}

export interface ConnectionMySql {
  type: ConnectionType.MY_SQL;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number;
    database_name: string;
  };
}

export interface ConnectionMsSql {
  type: ConnectionType.MS_SQL;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number;
    database_name: string;
  };
}

export interface ConnectionS3 {
  type: ConnectionType.S3;
  auth_data: ConnectionAuthS3;
  connection_data: {
    host: string;
    bucket: string;
    bucket_style: ConnectionBucketStyle;
    port: number | null;
    region: string | null;
    protocol: ConnectionProtocol;
  };
}

export interface GetConnectionsRequest extends PaginationRequest {
  group_id: number;
}

export interface GetConnectionRequest {
  id: number;
}

export type CreateConnectionRequest = {
  group_id: number;
  name: string;
  description: string;
} & ConnectionData;

export type UpdateConnectionRequest = {
  id: number;
  name: string;
  description: string;
} & ConnectionData;

export interface DeleteConnectionRequest {
  id: number;
}

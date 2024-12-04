import { ConnectionType, PaginationRequest } from '@shared/types';

export type Connection = {
  id: number;
  group_id: number;
  name: string;
  description: string;
} & ConnectionData;

export type ConnectionData = ConnectionHive | ConnectionHdfs | ConnectionOracle | ConnectionPostgres | ConnectionS3;

export type ConnectionBucketStyle = 'domain' | 'path';

export type ConnectionProtocol = 'https' | 'http';

export interface ConnectionHive {
  auth_data: {
    type: ConnectionType.HIVE;
    user: string;
    password?: string;
  };
  connection_data: {
    type: ConnectionType.HIVE;
    cluster: string;
  };
}

export interface ConnectionHdfs {
  auth_data: {
    type: ConnectionType.HDFS;
    user: string;
    password?: string;
  };
  connection_data: {
    type: ConnectionType.HDFS;
    cluster: string;
  };
}

export interface ConnectionOracle {
  auth_data: {
    type: ConnectionType.ORACLE;
    user: string;
    password?: string;
  };
  connection_data: {
    type: ConnectionType.ORACLE;
    host: string;
    port: number;
    service_name: string | null;
    sid: string | null;
  };
}

export interface ConnectionPostgres {
  auth_data: {
    type: ConnectionType.POSTGRES;
    user: string;
    password?: string;
  };
  connection_data: {
    type: ConnectionType.POSTGRES;
    host: string;
    port: number;
    database_name: string;
  };
}

export interface ConnectionS3 {
  auth_data: {
    type: ConnectionType.S3;
    access_key: string;
    secret_key?: string;
  };
  connection_data: {
    type: ConnectionType.S3;
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

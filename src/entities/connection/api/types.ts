import { ConnectionType, PaginationRequest } from '@shared/types';

export type Connection = {
  id: number;
  group_id: number;
  name: string;
  description: string;
} & ConnectionData;

export type ConnectionData =
  | ConnectionFtp
  | ConnectionFtps
  | ConnectionSftp
  | ConnectionWebdav
  | ConnectionSamba
  | ConnectionHdfs
  | ConnectionS3
  | ConnectionHive
  | ConnectionOracle
  | ConnectionPostgres
  | ConnectionClickhouse
  | ConnectionMySql
  | ConnectionMsSql;

export type ConnectionBucketStyle = 'domain' | 'path';

export type ConnectionProtocol = 'https' | 'http';

export type ConnectionSambaProtocol = 'SMB' | 'NetBIOS';

export type ConnectionSambaAuthType = 'NTLMv1' | 'NTLMv2';

export enum ConnectionAuthType {
  BASIC = 'basic',
  S3 = 's3',
  SAMBA = 'samba',
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

interface ConnectionAuthSamba {
  type: ConnectionAuthType.SAMBA;
  user: string;
  password?: string;
  auth_type: ConnectionSambaAuthType;
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
    database_name: string | null;
  };
}

export interface ConnectionMySql {
  type: ConnectionType.MYSQL;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number;
    database_name: string;
  };
}

export interface ConnectionMsSql {
  type: ConnectionType.MSSQL;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number;
    database_name: string;
  };
}

export interface ConnectionFtp {
  type: ConnectionType.FTP;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number;
  };
}

export interface ConnectionFtps {
  type: ConnectionType.FTPS;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number;
  };
}

export interface ConnectionSftp {
  type: ConnectionType.SFTP;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number;
  };
}

export interface ConnectionWebdav {
  type: ConnectionType.WEBDAV;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number | null;
    protocol: ConnectionProtocol;
  };
}

export interface ConnectionSamba {
  type: ConnectionType.SAMBA;
  auth_data: ConnectionAuthSamba;
  connection_data: {
    host: string;
    share: string;
    port: number | null;
    protocol: ConnectionSambaProtocol;
    domain: string;
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
  group_id: number;
  name: string;
  description: string;
} & ConnectionData;

export interface DeleteConnectionRequest {
  id: number;
}

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
  | ConnectionMsSql
  | ConnectionIceberg;

export type ConnectionBucketStyle = 'domain' | 'path';

export type ConnectionProtocol = 'https' | 'http';

export type ConnectionSambaProtocol = 'SMB' | 'NetBIOS';

export type ConnectionSambaAuthType = 'NTLMv1' | 'NTLMv2';

export type ConnectionIcebergS3AccessDelegation = 'vended-credentials' | 'remote-signing';

export enum ConnectionIcebergConnectionType {
  ICEBERG_REST_S3_DIRECT = 'iceberg_rest_s3_direct',
  ICEBERG_REST_S3_DELEGATED = 'iceberg_rest_s3_delegated',
}

export enum ConnectionAuthType {
  BASIC = 'basic',
  S3 = 's3',
  SAMBA = 'samba',
  ICEBERG_REST_BEARER = 'iceberg_rest_bearer',
  ICEBERG_REST_OAUTH2_CLIENT_CREDENTIALS = 'iceberg_rest_oauth2_client_credentials',
  ICEBERG_REST_BEARER_S3_BASIC = 'iceberg_rest_bearer_s3_basic',
  ICEBERG_REST_OAUTH2_CLIENT_CREDENTIALS_S3_BASIC = 'iceberg_rest_oauth2_client_credentials_s3_basic',
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

export interface ConnectionIcebergRestS3Direct {
  type: ConnectionIcebergConnectionType.ICEBERG_REST_S3_DIRECT;
  rest_catalog_url: string;
  s3_warehouse_path: string;
  s3_host: string;
  s3_bucket: string;
  s3_bucket_style: ConnectionBucketStyle;
  s3_port: number | null;
  s3_region: string;
  s3_protocol: ConnectionProtocol;
}

export interface ConnectionIcebergRestS3Delegated {
  type: ConnectionIcebergConnectionType.ICEBERG_REST_S3_DELEGATED;
  rest_catalog_url: string;
  s3_warehouse_name: string | null;
  s3_access_delegation: ConnectionIcebergS3AccessDelegation;
}

export interface ConnectionIcebergRestBearer {
  type: ConnectionAuthType.ICEBERG_REST_BEARER;
  rest_catalog_token?: string;
}

export interface ConnectionIcebergRestBearerS3Basic {
  type: ConnectionAuthType.ICEBERG_REST_BEARER_S3_BASIC;
  rest_catalog_token?: string;
  s3_access_key: string;
  s3_secret_key?: string;
}

export interface ConnectionIcebergRestClientCredentials {
  type: ConnectionAuthType.ICEBERG_REST_OAUTH2_CLIENT_CREDENTIALS;
  rest_catalog_oauth2_client_id: string;
  rest_catalog_oauth2_scopes: string[];
  rest_catalog_oauth2_resource: string | null;
  rest_catalog_oauth2_audience: string | null;
  rest_catalog_oauth2_token_endpoint: string | null;
}

export interface ConnectionIcebergRestClientCredentialsS3Basic {
  type: ConnectionAuthType.ICEBERG_REST_OAUTH2_CLIENT_CREDENTIALS_S3_BASIC;
  rest_catalog_oauth2_client_id: string;
  rest_catalog_oauth2_client_secret?: string;
  rest_catalog_oauth2_scopes: string[];
  rest_catalog_oauth2_resource: string | null;
  rest_catalog_oauth2_audience: string | null;
  rest_catalog_oauth2_token_endpoint: string | null;
  s3_access_key: string;
  s3_secret_key?: string;
}

export interface ConnectionIceberg {
  type: ConnectionType.ICEBERG;
  auth_data:
    | ConnectionIcebergRestBearer
    | ConnectionIcebergRestClientCredentials
    | ConnectionIcebergRestBearerS3Basic
    | ConnectionIcebergRestClientCredentialsS3Basic;
  connection_data: ConnectionIcebergRestS3Direct | ConnectionIcebergRestS3Delegated;
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
  };
}

export interface ConnectionMySql {
  type: ConnectionType.MYSQL;
  auth_data: ConnectionAuthBasic;
  connection_data: {
    host: string;
    port: number;
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

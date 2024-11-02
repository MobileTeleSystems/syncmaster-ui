import { ConnectionType, PaginationRequest } from '@shared/types';

export type Connection = {
  id: number;
  group_id: number;
  name: string;
  description: string;
} & ConnectionData;

type ConnectionData = ConnectionHive | ConnectionHdfs | ConnectionOracle | ConnectionPostgres | ConnectionS3;

interface ConnectionHive {
  auth_data: {
    type: ConnectionType.HIVE;
    user: string;
  };
  connection_data: {
    type: ConnectionType.HIVE;
    cluster: string;
  };
}

interface ConnectionHdfs {
  auth_data: {
    type: ConnectionType.HDFS;
    user: string;
  };
  connection_data: {
    type: ConnectionType.HDFS;
    cluster: string;
  };
}

interface ConnectionOracle {
  auth_data: {
    type: ConnectionType.ORACLE;
    user: string;
  };
  connection_data: {
    type: ConnectionType.ORACLE;
    host: string;
    port: number;
    service_name: string | null;
    sid: string | null;
    additional_params: object;
  };
}

interface ConnectionPostgres {
  auth_data: {
    type: ConnectionType.POSTGRES;
    user: string;
  };
  connection_data: {
    type: ConnectionType.POSTGRES;
    host: string;
    port: number;
    database_name: string;
    additional_params: object;
  };
}

interface ConnectionS3 {
  auth_data: {
    type: ConnectionType.S3;
    access_key: string;
  };
  connection_data: {
    type: ConnectionType.S3;
    host: string;
    bucket: string;
    bucket_style: 'domain' | 'path';
    port: number | null;
    region: string | null;
    protocol: 'http' | 'https';
  };
}

export interface GetConnectionsRequest extends PaginationRequest {
  group_id: number;
}

export interface GetConnectionRequest {
  id: number;
}

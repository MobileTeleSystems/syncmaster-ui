export type PostgresAuthData = {
    type: "postgres";
    user: string;
};

export type OracleAuthData = {
    type: "oracle";
    user: string;
};

export type PostgresConnectionData = {
    additional_params: string;
    database_name: string;
    host: string;
    port: number;
    type: "postgres";
};

export type OracleConnectionData = {
    additional_params: string;
    service_name: string;
    sid: string;
    host: string;
    port: number;
    type: "oracle";
};

export type ConnectionData = {
    id: number;
    group_id: number;
    description: string;
    name: string;
    auth_data: PostgresAuthData | OracleAuthData;
    connection_data: PostgresConnectionData | OracleConnectionData;
};

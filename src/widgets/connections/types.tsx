export type PostgresAuthData = {
    type: string,
    user: string,
}

export type PostgresConnectionData = {
    additional_params: string,
    database_name: string,
    host: string,
    port: number,
    type: "postgres",
}

export type ConnectionData = {
    auth_data: PostgresAuthData,
    connection_data: PostgresConnectionData,
    description: string,
    group_id: number,
    id: number,
    name: string,
}
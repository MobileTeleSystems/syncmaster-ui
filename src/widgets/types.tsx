import type { StrategyParams } from "@entities/transfer/ui/edit/types";
import type {
    OracleAuthData,
    OracleConnectionData,
    PostgresAuthData,
    PostgresConnectionData,
} from "@widgets/connection/types";

type TransferParams = {
    table_name: string;
    type: string;
};

export type ConnectionData = {
    id: number;
    group_id: number;
    description: string;
    name: string;
    auth_data: PostgresAuthData | OracleAuthData;
    data: PostgresConnectionData | OracleConnectionData;
};

export type TransferDump = {
    description: string;
    group_id: number;
    id: number;
    is_scheduled: boolean;
    name: string;
    queue_id: number;
    schedule: string;
    source_connection: ConnectionData;
    source_connection_id: number;
    source_params: TransferParams;
    strategy_params: StrategyParams;
    target_connection: ConnectionData;
    target_connection_id: number;
    target_params: TransferParams;
};

export let roles = [
    { id: "Maintainer", name: "Maintainer" },
    { id: "Developer", name: "Developer" },
    { id: "Guest", name: "Guest" },
];
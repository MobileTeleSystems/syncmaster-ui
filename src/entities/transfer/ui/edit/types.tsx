type UpdateTransferSchemaSourceTarget =
    | PostgresReadTransferSourceAndTarget
    | OracleReadTransferSourceAndTarget;

type PostgresReadTransferSourceAndTarget = { type: "postgres" };
type OracleReadTransferSourceAndTarget = { type: "oracle" };

type StrategyParams = {
    type: "full" | "incremental";
};

export type TransferData = {
    id: number;
    group_id: number;
    source_connection_id: number;
    target_connection_id: number;
    name: string;
    description: string;
    is_scheduled: boolean;
    schedule: string;
    queue_id: number;
    source_params: UpdateTransferSchemaSourceTarget;
    target_params: UpdateTransferSchemaSourceTarget;
    strategy_params: StrategyParams;
};

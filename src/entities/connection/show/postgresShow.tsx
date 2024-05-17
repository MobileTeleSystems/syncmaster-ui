import BaseConnectionShow from "@entities/connection/show/baseShow";

import { ConnectionData } from "@widgets/connection/types";

const PostgresConnectionShow = ({ data }: { data: ConnectionData }) => {
    return (
        <BaseConnectionShow
            data={data}
            connectionColumns={[
                { source: "auth_data.user", label: "User" },
                {
                    source: "connection_data.additional_params",
                    label: "Additional params",
                },
                {
                    source: "connection_data.database_name",
                    label: "Database name",
                },
                { source: "connection_data.host", label: "Host" },
                { source: "connection_data.port", label: "Port" },
            ]}
        />
    );
};

export default PostgresConnectionShow;

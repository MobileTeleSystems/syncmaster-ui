import BaseConnectionShow from "@entities/connection/show/baseShow";
import { ConnectionData } from "@widgets/connection/types";

const OracleConnectionShow = ({
    data,
    editable = true,
    showTitle = true,
}: {
    data: ConnectionData;
    editable?: boolean;
    showTitle?: boolean;
}) => {
    return (
        <BaseConnectionShow
            data={data}
            connectionColumns={[
                { source: "auth_data.user", label: "User" },
                {
                    source: "connection_data.additional_params",
                    label: "Additional params",
                },
                { source: "connection_data.host", label: "Host" },
                {
                    source: "connection_data.service_name",
                    label: "Service name",
                },
                { source: "connection_data.sid", label: "sid" },
                { source: "connection_data.port", label: "Port" },
            ]}
            editable={editable}
            showTitle={showTitle}
        />
    );
};

export default OracleConnectionShow;

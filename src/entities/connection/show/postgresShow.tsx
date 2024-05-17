import BaseConnectionShow from "@entities/connection/show/baseShow";

import { ConnectionData } from "@widgets/connection/types";
import { TextField } from "react-admin";

const PostgresConnectionShow = ({ data }: { data: ConnectionData }) => {
    return (
        <BaseConnectionShow
            data={data}
            connectionColumns={[
                <TextField source="auth_data.user" label={"User"} />,
                <TextField
                    source="connection_data.additional_params"
                    label={"Additional params"}
                />,
                <TextField
                    source="connection_data.database_name"
                    label={"Database name"}
                />,
                <TextField source="connection_data.host" label={"Host"} />,
                <TextField source="connection_data.port" label={"Port"} />,
            ]}
        />
    );
};

export default PostgresConnectionShow;

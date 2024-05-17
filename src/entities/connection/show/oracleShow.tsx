import BaseConnectionShow from "@entities/connection/show/baseShow";
import { ConnectionData } from "@widgets/connection/types";
import { TextField } from "react-admin";

const OracleConnectionShow = ({ data }: { data: ConnectionData }) => {
    return (
        <BaseConnectionShow
            data={data}
            connectionColumns={[
                <TextField source="auth_data.user" label={"User"} />,
                <TextField
                    source="connection_data.additional_params"
                    label={"Additional params"}
                />,
                <TextField source="connection_data.host" label={"Host"} />,
                <TextField
                    source="connection_data.service_name"
                    label={"Service name"}
                />,
                <TextField source="connection_data.sid" label={"sid"} />,
                <TextField source="connection_data.port" label={"Port"} />,
            ]}
        />
    );
};

export default OracleConnectionShow;

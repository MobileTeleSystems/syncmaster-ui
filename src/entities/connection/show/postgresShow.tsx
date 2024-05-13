import { Card } from "@mui/material";
import { ConnectionData } from "@widgets/connections/types";
import {
    EditButton,
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
    Title,
} from "react-admin";

const PostgresConnectionShow = ({
    id,
    data,
}: {
    id: number;
    data: ConnectionData;
}) => {
    const processedData = {
        ...data,
        connection_data: {
            ...data.connection_data,
            additional_params: JSON.stringify(
                data.connection_data.additional_params,
            ),
        },
    };

    return (
        <RecordContextProvider value={processedData}>
            <div style={{ paddingTop: "1em" }}>
                <Title title={"Connection #" + id} />
                <Card>
                    <SimpleShowLayout>
                        <TextField source="name" />
                        <TextField
                            source="connection_data.type"
                            label={"Connection Type"}
                        />
                        <TextField source="description" />
                        <TextField source="auth_data.user" label={"User"} />
                        <TextField
                            source="connection_data.additional_params"
                            label={"Additional params"}
                        />
                        <TextField
                            source="connection_data.database_name"
                            label={"Database name"}
                        />
                        <TextField
                            source="connection_data.host"
                            label={"Host"}
                        />
                        <TextField
                            source="connection_data.port"
                            label={"Port"}
                        />
                    </SimpleShowLayout>
                </Card>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        paddingTop: "0.5em",
                        paddingBottom: "0.5em",
                    }}
                >
                    <EditButton />
                </div>
            </div>
        </RecordContextProvider>
    );
};

export default PostgresConnectionShow;
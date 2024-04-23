import { Card } from "@mui/material";
import {
    DateField,
    EditButton,
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
    Title,
} from "react-admin";
import { ConnectionData } from "@widgets/connections/types";

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
                <Title title={"Connection id = " + id} />
                <Card>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="description" />
                        <TextField source="auth_data.type" label={"Type"} />
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
                        <TextField
                            source="connection_data.type"
                            label={"Connection Type"}
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

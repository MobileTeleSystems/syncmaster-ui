import { Card, Typography } from "@mui/material";
import { ConnectionData } from "@widgets/connection/types";
import {
    EditButton,
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
    Title,
} from "react-admin";

const BaseConnectionShow = ({
    data,
    connectionColumns,
    editable = true,
    showTitle = true,
}: {
    data: ConnectionData;
    connectionColumns: { source: string; label: string }[];
    editable: boolean;
    showTitle: boolean;
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
                {showTitle && (
                    <Title
                        title={
                            <Typography
                                variant={"inherit"}
                                noWrap={false}
                                sx={{
                                    overflowY: "auto",
                                    width: "20em",
                                }}
                            >
                                Connection {data.name}
                            </Typography>
                        }
                    />
                )}
                <Card>
                    <SimpleShowLayout>
                        <TextField source="name" />
                        <TextField
                            source="connection_data.type"
                            label={"Connection Type"}
                        />
                        <TextField source="description" />
                        {connectionColumns.map((column, id) => (
                            <TextField {...column} key={id} />
                        ))}
                    </SimpleShowLayout>
                </Card>
                {editable && (
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
                )}
            </div>
        </RecordContextProvider>
    );
};

export default BaseConnectionShow;

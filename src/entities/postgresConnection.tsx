import { Card } from "@mui/material";
import {
    DateField,
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
    Title,
    useGetOne,
} from "react-admin";
import Loading from "src/shared/ui/loading";

const PostgresConnectionShow = ({ id }: { id: number }) => {
    const { data, isLoading } = useGetOne("connections", { id });

    if (isLoading) return <Loading />;

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
            <div>
                <Title title={"Connection id = " + id} />
                <Card>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="name" />
                        <DateField source="description" />
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
            </div>
        </RecordContextProvider>
    );
};

export default PostgresConnectionShow;

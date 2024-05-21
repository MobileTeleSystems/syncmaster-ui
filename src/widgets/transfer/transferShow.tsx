import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Card } from "@mui/material";
import Error from "@shared/ui/error";
import {
    Button, CreateButton,
    EditButton,
    Loading,
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
    Title,
    useGetOne
} from "react-admin";
import { useParams } from "react-router";
import LinkedField from "@shared/linkedField";
import RunList from "@widgets/run/list/runList";

const TransferShow = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetOne("transfers", { id });
    if (id === undefined) return <Error message={"Undefined id"} />;
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;

    const processedData = {
        ...data,
        source_params: JSON.stringify(data.source_params),
        target_params: JSON.stringify(data.target_params),
        strategy_params: JSON.stringify(data.strategy_params),
    };
    return (
        <RecordContextProvider value={processedData}>
            <div style={{ paddingTop: "1em" }}>
                <Title title={"Transfer " + data.name} />
                <Card>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="description" />
                        <LinkedField
                            id={data.source_connection_id}
                            label="Source connection"
                            resource={"connections"}
                        />
                        <LinkedField
                            id={data.target_connection_id}
                            label="Target connection"
                            resource={"connections"}
                        />
                        <LinkedField
                            id={data.queue_id}
                            label="Queue"
                            resource={"queues"}
                        />
                        <TextField source="is_scheduled" />
                        {data.is_scheduled && <TextField source="schedule" />}
                        <TextField source="is_scheduled" />
                        <TextField source="source_params" />
                        <TextField source="target_params" />
                        <TextField source="strategy_params"/>
                        <RunList transferId={data.id} label={"Runs"} />
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

export default TransferShow;

import { Card } from "@mui/material";
import Error from "@shared/ui/error";
import {
    EditButton,
    Loading,
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
    Title,
    useGetOne,
} from "react-admin";
import { useParams } from "react-router";

const QueueShow = () => {
    const { id } = useParams();
    if (id === undefined) return <Error />;
    const { data, isLoading, error } = useGetOne("queues", { id });
    if (isLoading) return <Loading />;
    if (error) return <Error />;
    return (
        <RecordContextProvider value={data}>
            <div style={{ paddingTop: "1em" }}>
                <Title title={"Queue #" + id} />
                <Card>
                    <SimpleShowLayout>
                        <TextField source="name" />
                        <TextField source="description" />
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

export default QueueShow;

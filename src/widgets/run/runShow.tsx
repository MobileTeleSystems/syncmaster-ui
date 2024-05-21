import { Card } from "@mui/material";
import LinkedField from "@shared/linkedField";
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

const RunShow = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetOne("runs", { id });
    if (id === undefined) return <Error message={"Undefined id"} />;
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <RecordContextProvider value={data}>
            <div style={{ paddingTop: "1em" }}>
                <Title title={"Run " + data.name} />
                <Card>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="started_at" />
                        <TextField source="ended_at" />
                        <TextField source="status" />
                        <TextField source="log_url" />
                        <TextField source="transfer_dump" />
                        <LinkedField
                            id={data.transfer_id}
                            label="Transfer"
                            resource={"transfers"}
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

export default RunShow;

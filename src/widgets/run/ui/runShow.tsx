import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";
import { Card } from "@mui/material";
import Error from "@shared/ui/error";
import { useEffect } from "react";
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
    const [, setCanChangeCurrentGroup] = useLocalStoreChangeGroup();
    useEffect(() => {
        setCanChangeCurrentGroup(true);
    }, []);
    const { id } = useParams();
    const { data, isLoading, error } = useGetOne("runs", { id });
    if (id === undefined) return <Error message={"Undefined id"} />;
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;

    const processedData = {
        ...data,
        transfer_dump: JSON.stringify(data.transfer_dump)
    }

    return (
        <RecordContextProvider value={processedData}>
            <div style={{ paddingTop: "1em" }}>
                <Title title={"Run #" + id} />
                <Card>
                    <SimpleShowLayout>
                        <TextField source="started_at" />
                        <TextField source="ended_at" />
                        <TextField source="status" />
                        <TextField source="log_url" />
                        <TextField source="transfer_dump" />
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

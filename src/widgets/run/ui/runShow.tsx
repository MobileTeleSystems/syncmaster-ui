import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";
import { Card } from "@mui/material";
import Error from "@shared/ui/error";
import { useEffect, useState } from "react";
import {
    Button,
    Confirm,
    Loading,
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
    Title,
    useDataProvider,
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

    const dataProvider = useDataProvider();
    const [open, setOpen] = useState(false);

    const handleStopRun = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);
    const handleConfirm = () => {
        dataProvider.stopRun(id);
        setOpen(false);
    };

    if (id === undefined) return <Error message={"Undefined id"} />;
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;

    const processedData = {
        ...data,
        transfer_dump: JSON.stringify(data.transfer_dump),
    };

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
                {(processedData.status == "STARTED" ||
                    processedData.status == "CREATED") && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                            paddingTop: "0.5em",
                            paddingBottom: "0.5em",
                        }}
                    >
                        <Button label={"Stop"} onClick={handleStopRun} />
                        <Confirm
                            isOpen={open}
                            title={`Stop run #${id}`}
                            content="Are you sure you want to stop this run?"
                            onConfirm={handleConfirm}
                            onClose={handleDialogClose}
                        />
                    </div>
                )}
            </div>
        </RecordContextProvider>
    );
};

export default RunShow;

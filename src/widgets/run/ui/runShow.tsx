import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";
import StopIcon from "@mui/icons-material/Stop";
import { Card } from "@mui/material";
import LinkedField from "@shared/linkedField";
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
import StatusField from "@widgets/run/ui/list/statusField";

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
                        <StatusField source={"status"}/>
                        <TextField source="log_url" />
                        <LinkedField
                            id={data.transfer_id}
                            label="Transfer"
                            resource={"transfers"}
                        />
                        <LinkedField
                            resource={"connections"}
                            id={data.transfer_dump.source_connection.id}
                            label="Source connection"
                        />
                        <LinkedField
                            resource={"connections"}
                            id={data.transfer_dump.target_connection.id}
                            label="Target connection"
                        />
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
                        <Button
                            label={"Stop"}
                            children={<StopIcon />}
                            onClick={handleStopRun}
                            sx={{
                                bgcolor: "background.paper",
                                boxShadow: 1,
                                borderRadius: 2,
                                p: 2,
                                color: "crimson",
                            }}
                        />
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

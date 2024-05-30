import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";
import StopIcon from "@mui/icons-material/Stop";
import { Card } from "@mui/material";
import Error from "@shared/ui/error";
import StatusField from "@widgets/run/ui/list/statusField";
import DumpTransferData from "@widgets/run/ui/show/dumpTransferData";
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
import LinkedField from "@shared/linkedField";
import { DeleteButtonStyle } from "@entities/types";

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
                        <StatusField source={"status"} />
                        <TextField source="log_url" />
                        <LinkedField
                            id={data.transfer_id}
                            label={"Transfer"}
                            resource={"transfers"}
                        />
                        <DumpTransferData
                            data={data.transfer_dump}
                            label="Transfer dump data"
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
                                ...DeleteButtonStyle,
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

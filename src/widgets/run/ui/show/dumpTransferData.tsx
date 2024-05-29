import DBSourceParamsShow from "@entities/transfer/ui/show/dbSourceParamsShow";
import DBTargetParamsShow from "@entities/transfer/ui/show/dbTargetParamsShow";
import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";
import { Card } from "@mui/material";
import DumpConnectionDataWrapper from "@widgets/run/ui/show/dumpConnectionDataWrapper";
import DumpQueueData from "@widgets/run/ui/show/dumpQueueData";
import { useEffect } from "react";
import {
    BooleanField,
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
} from "react-admin";

const DumpTransferData = ({ data }) => {
    const [, setCanChangeCurrentGroup] = useLocalStoreChangeGroup();
    useEffect(() => {
        setCanChangeCurrentGroup(true);
    }, []);

    return (
        <RecordContextProvider value={data}>
            <div style={{ paddingTop: "1em" }}>
                <Card>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="description" />
                        <DumpQueueData data={data} label={"Queue dump"} />
                        <DumpConnectionDataWrapper
                            data={{
                                ...data.source_connection,
                                connection_data: data.source_connection.data,
                            }}
                            label={"Source connection"}
                        />
                        <DBSourceParamsShow label={"Source (schema.table)"} />{" "}
                        // TODO: without the label option it does not show the
                        field name
                        <DumpConnectionDataWrapper
                            data={{
                                ...data.target_connection,
                                connection_data: data.target_connection.data,
                            }}
                            label={"Target connection"}
                        />
                        <DBTargetParamsShow label={"Target (schema.table)"} />{" "}
                        // TODO: without the label option it does not write the
                        field name
                        <BooleanField
                            name="is_scheduled"
                            label="Is scheduled"
                            source="is_scheduled"
                        />
                        {data.is_scheduled && (
                            <TextField
                                source="schedule"
                                name="is_scheduled"
                                label={"Schedule"}
                            />
                        )}
                        <TextField
                            source="strategy_params.type"
                            label={"Strategy params"}
                        />
                    </SimpleShowLayout>
                </Card>
            </div>
        </RecordContextProvider>
    );
};

export default DumpTransferData;

import DBSourceParamsShow from "@entities/transfer/ui/show/dbSourceParamsShow";
import DBTargetParamsShow from "@entities/transfer/ui/show/dbTargetParamsShow";
import useEnableGroupSelector from "@hooks/useEnableGroupSelector";
import { Card } from "@mui/material";
import LinkedField from "@shared/linkedField";
import DumpConnectionDataWrapper from "@widgets/run/ui/show/dumpConnectionDataWrapper";
import type { TransferDump } from "@widgets/types";
import { useEffect } from "react";
import {
    BooleanField,
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
} from "react-admin";

const DumpTransferData = ({ data }: { data: TransferDump }) => {
    const [, setEnableGroupSelector] = useEnableGroupSelector();
    useEffect(() => {
        setEnableGroupSelector(true);
    }, []);

    return (
        <RecordContextProvider value={data}>
            <div style={{ paddingTop: "1em" }}>
                <Card>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="name" label={"Transfer"} />
                        <TextField source="description" />
                        <LinkedField
                            // @ts-expect-error label is react-admin magic field
                            label={"Queue"}
                            resource={"queues"}
                            id={data.queue_id}
                        />
                        <DumpConnectionDataWrapper
                            data={{
                                ...data.source_connection,
                                connection_data: data.source_connection.data,
                            }}
                            // @ts-expect-error label is react-admin magic field
                            label={"Source connection"}
                        />
                        <DBSourceParamsShow
                            // @ts-expect-error  label is react-admin magic field
                            label={"Source (schema.table)"}
                        />
                        {/** // TODO: without the label option it does not show the field name */}
                        <DumpConnectionDataWrapper
                            data={{
                                ...data.target_connection,
                                connection_data: data.target_connection.data,
                            }}
                            // @ts-expect-error  label is react-admin magic field
                            label={"Target connection"}
                        />
                        <DBTargetParamsShow
                            // @ts-expect-error  label is react-admin magic field
                            label={"Target (schema.table)"}
                        />{" "}
                        {/** // TODO: without the label option it does not show the */}
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

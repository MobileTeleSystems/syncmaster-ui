import DBFileTargetParamsShow from "@entities/transfer/ui/show/dbFileTargetParamsShow";
import TitleElement from "@entities/titleElement";
import DBFileSourceParamsShow from "@entities/transfer/ui/show/dbFileSourceParamsShow";
import DBSourceParamsShow from "@entities/transfer/ui/show/dbSourceParamsShow";
import DBTargetParamsShow from "@entities/transfer/ui/show/dbTargetParamsShow";
import useEnableGroupSelector from "@hooks/useEnableGroupSelector";
import { Card } from "@mui/material";
import LinkedField from "@shared/linkedField";
import Error from "@shared/ui/error";
import RunList from "@widgets/run/ui/list/runList";
import { dbType } from "@widgets/transfer/ui/types";
import { useEffect } from "react";
import {
    BooleanField,
    EditButton,
    Loading,
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
    Title,
    useGetOne,
} from "react-admin";
import { useParams } from "react-router";

const TransferShow = () => {
    const [, setEnableGroupSelector] = useEnableGroupSelector();
    useEffect(() => {
        setEnableGroupSelector(true);
    }, []);
    const { id } = useParams();
    const { data, isLoading, error } = useGetOne("transfers", { id });
    if (id === undefined) return <Error message={"Undefined id"} />;
    if (isLoading) return <Loading />;
    // @ts-expect-error error type
    if (error) return <Error message={error} />;

    return (
        <RecordContextProvider value={data}>
            <div style={{ paddingTop: "1em" }}>
                <Title
                    title={<TitleElement title={`Transfer ${data.name}`} />}
                />
                <Card>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="description" />
                        <LinkedField
                            id={data.queue_id}
                            // @ts-expect-error  label is react-admin magic field
                            label="Queue"
                            resource={"queues"}
                        />
                        <LinkedField
                            id={data.source_connection_id}
                            // @ts-expect-error  label is react-admin magic field
                            label={`Source connection (${data.source_params.type})`}
                            resource={"connections"}
                        />
                        {/* if there is a file connection */}
                        {dbType.includes(data.source_params.type) && (
                            <DBSourceParamsShow
                                // @ts-expect-error  label is react-admin magic field
                                label={"Source params"}
                            />
                        )}
                        {!dbType.includes(data.source_params.type) && (
                            <DBFileSourceParamsShow
                                // @ts-expect-error  label is react-admin magic field
                                label={"Source (schema.table)"}
                            />
                        )}
                        {/** // TODO: without the label option it does not show the field name */}
                        <LinkedField
                            id={data.target_connection_id}
                            // @ts-expect-error  label is react-admin magic field
                            label={`Target connection (${data.target_params.type})`}
                            resource={"connections"}
                        />
                        {/* if there is a file connection */}
                        {dbType.includes(data.target_params.type) && (
                            <DBTargetParamsShow
                                // @ts-expect-error  label is react-admin magic field
                                label={"Target (schema.table)"}
                            />
                        )}
                        {!dbType.includes(data.source_params.type) && (
                            <DBFileTargetParamsShow
                                // @ts-expect-error  label is react-admin magic field
                                label={"Target params"}
                            />
                        )}
                        {/** // TODO: without the label option it does not show the field name */}
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
                        <RunList
                            transferId={data.id}
                            transferName={data.name}
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

export default TransferShow;

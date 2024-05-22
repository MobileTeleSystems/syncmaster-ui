import EditToolbar from "@entities/editToolbar";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import { Typography } from "@mui/material";
import Error from "@shared/ui/error";
import EditTransferFormWrapper from "@widgets/transfer/ui/edit/wrappers/editTransferFormWrapper";
import { useState } from "react";
import {
    Edit,
    Loading,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    useEditController,
    useGetList,
} from "react-admin";

const scheduledValues = [
    { name: true, id: true },
    { name: false, id: false },
];

const Select = ({
    id,
    name,
    resource,
    setData,
    label,
}: {
    id: number;
    name: string;
    resource: string;
    setData?: ({ id, label }: { id: number; label: string }) => {};
    label: string
}) => {
    // TODO: since the backend sends a list page by page and not all elements at once,
    //  if there are a large number of elements it may lose records
    const { data, isLoading, error } = useGetList(resource, {
        meta: { group_id: id, page_size: 200 },
    });
    const [currentConnection, setCurrentConnection] = useState();
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <SelectInput
            name={name}
            label={label}
            source={name}
            choices={data}
            validate={required()}
            value={currentConnection}
            onChange={(event) => {
                if (setData && data) {
                    const label = data.filter(
                        (connection) => connection.id === event.target.value,
                    );
                    setData({
                        id: event.target.value,
                        label: label[0].connection_data.type,
                    });
                }
                setCurrentConnection(event.target.value);
            }}
        />
    );
};

const TransferEditForm = ({ record }) => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [currentSourceType, setCurrentSourceType] = useState({
        id: record.source_connection_id,
        label: record.source_params.type,
    });
    const [currentTargetType, setCurrentTargetType] = useState({
        id: record.target_connection_id,
        label: record.target_params.type,
    });
    return (
        <Edit mutationMode="pessimistic">
            <SimpleForm toolbar={<EditToolbar />}>
                <TextInput source="name" name={"name"} />
                <Select
                    id={currentGroup.id}
                    name={"queue_id"}
                    resource={"queues"}
                />
                <Select
                    id={currentGroup.id}
                    name={"source_connection_id"}
                    resource={"connections"}
                    setData={setCurrentSourceType}
                    label={"Source connection : " + currentSourceType.label}
                />
                <EditTransferFormWrapper
                    transferType={currentSourceType.label}
                    source={"source_params.table_name"}
                    label={"Source"}
                />
                <Select
                    id={currentGroup.id}
                    name={"target_connection_id"}
                    resource={"connections"}
                    setData={setCurrentTargetType}
                    label={"Target connection : " + currentTargetType.label}
                />
                <EditTransferFormWrapper
                    transferType={currentTargetType.label}
                    source={"target_params.table_name"}
                    label={"Target"}
                />
                <TextInput source="description" name={"description"} />
                <SelectInput
                    name="is_scheduled"
                    source="is_scheduled"
                    choices={scheduledValues}
                    validate={required()}
                />
                <TextInput source="schedule" name={"schedule"} />
                <TextInput source="strategy_params" name={"strategy_params"} />
            </SimpleForm>
        </Edit>
    );
};

const TransferEdit = () => {
    const { record, isLoading } = useEditController();
    if (isLoading) return <Loading />;
    return <TransferEditForm record={record} />;
};

export default TransferEdit;

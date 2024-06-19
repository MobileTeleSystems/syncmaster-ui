import EditToolbar from "@entities/editToolbar";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import ConnectionSelector from "@widgets/connectionSelector";
import { strategyParams } from "@widgets/transfer/ui/types";
import { useState } from "react";
import {
    BooleanInput,
    Edit,
    Loading,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    useEditController,
} from "react-admin";
import DBSourceParamsEdit from "@entities/transfer/ui/edit/dbSourceParamsEdit";
import DBTargetParamsEdit from "@entities/transfer/ui/edit/dbTargetParamsEdit";

const TransferEditForm = ({
    record,
}: {
    record: {
        is_scheduled: boolean;
        source_connection_id: number;
        target_connection_id: number;
        source_params: { type: "postgres" | "oracle" };
        target_params: { type: "postgres" | "oracle" };
        strategy_params: { type: "full" | "incremental" };
    };
}) => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [isScheduled, setIsScheduled] = useState<boolean>(
        record.is_scheduled,
    );
    const [currentSourceType, setCurrentSourceType] = useState({
        id: record.source_connection_id,
        label: record.source_params.type,
    });
    const [currentTargetType, setCurrentTargetType] = useState({
        id: record.target_connection_id,
        label: record.target_params.type,
    });
    const processedData = {
        ...record,
        strategy_params: record.strategy_params.type,
    };
    const transform = (data: {
        name: string;
        description: string;
        queue_id: number;
        source_connection_id: number;
        target_connection_id: number;
        strategy_params: "full" | "incremental";
        schedule: string;
        is_scheduled: boolean;
        source_params: object;
        target_params: object;
    }) => ({
        ...data,
        new_queue_id: data.queue_id,
        strategy_params: { type: data.strategy_params },
        source_params: {
            ...data.source_params,
            type: currentSourceType.label,
        },
        target_params: {
            ...data.target_params,
            type: currentTargetType.label,
        },
    });
    return (
        <Edit
            mutationMode="pessimistic"
            transform={transform}
            redirect={"show"}
        >
            <SimpleForm toolbar={<EditToolbar />} values={processedData}>
                <TextInput source="name" name={"name"} />
                <TextInput source="description" name={"description"} />
                <ConnectionSelector
                    id={currentGroup.id}
                    name={"queue_id"}
                    resource={"queues"}
                />
                <ConnectionSelector
                    id={currentGroup.id}
                    name={"source_connection_id"}
                    resource={"connections"}
                    setData={setCurrentSourceType}
                    label={`Source connection (${currentSourceType.label})`}
                />
                <DBSourceParamsEdit />
                <ConnectionSelector
                    id={currentGroup.id}
                    name={"target_connection_id"}
                    resource={"connections"}
                    setData={setCurrentTargetType}
                    label={`Target connection (${currentTargetType.label})`}
                />
                <DBTargetParamsEdit />
                <BooleanInput
                    name="is_scheduled"
                    label="Is scheduled"
                    source="is_scheduled"
                    checked={isScheduled}
                    onChange={(event) => {
                        setIsScheduled(event.target.checked);
                    }}
                />
                <TextInput
                    source="schedule"
                    name={"schedule"}
                    disabled={!isScheduled}
                />
                <SelectInput
                    name="strategy_params"
                    source="strategy_params"
                    choices={strategyParams}
                    validate={required()}
                />
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

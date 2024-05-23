import EditToolbar from "@entities/editToolbar";
import Selector from "@entities/selector";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import EditTransferFormWrapper from "@widgets/transfer/ui/edit/wrappers/editTransferFormWrapper";
import { scheduledValues, strategyParams } from "@widgets/transfer/ui/types";
import { useState } from "react";
import {
    Edit,
    Loading,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    useEditController,
} from "react-admin";

const TransferEditForm = ({ record }) => {
    const [currentGroup] = useLocalStoreCurrentGroup();
    const [isScheduled, setIsScheduled] = useState<true | false>(
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
    const transform = (data) => ({
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
        <Edit mutationMode="pessimistic" transform={transform}>
            <SimpleForm toolbar={<EditToolbar />} values={processedData}>
                <TextInput source="name" name={"name"} />
                <TextInput source="description" name={"description"} />
                <Selector
                    id={currentGroup.id}
                    name={"queue_id"}
                    resource={"queues"}
                />
                <Selector
                    id={currentGroup.id}
                    name={"source_connection_id"}
                    resource={"connections"}
                    setData={setCurrentSourceType}
                    label={"Source connection"}
                />
                <EditTransferFormWrapper
                    transferType={currentSourceType.label}
                    source={"source_params.table_name"}
                    label={"Source"}
                    helperText={currentSourceType.label}
                />
                <Selector
                    id={currentGroup.id}
                    name={"target_connection_id"}
                    resource={"connections"}
                    setData={setCurrentTargetType}
                    label={"Target connection"}
                />
                <EditTransferFormWrapper
                    transferType={currentTargetType.label}
                    source={"target_params.table_name"}
                    label={"Target"}
                    helperText={currentTargetType.label}
                />
                <SelectInput
                    name="is_scheduled"
                    source="is_scheduled"
                    choices={scheduledValues}
                    validate={required()}
                    value={isScheduled}
                    onChange={(event) => {
                        setIsScheduled(event.target.value);
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

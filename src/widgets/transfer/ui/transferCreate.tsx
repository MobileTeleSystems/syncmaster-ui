import Selector from "@entities/selector";
import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import EditTransferFormWrapper from "@entities/transfer/ui/edit/wrappers/editTransferFormWrapper";
import { useEffect, useState } from "react";
import {
    Create,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
} from "react-admin";
import { scheduledValues, strategyParams } from "@widgets/transfer/ui/types";

const TransferCreate = () => {
    const [, setIsChange] = useLocalStoreChangeGroup();
    useEffect(() => {
        setIsChange(true);
    }, []);

    const [currentGroup] = useLocalStoreCurrentGroup();
    const [isScheduled, setIsScheduled] = useState<true | false>();
    const [currentSourceType, setCurrentSourceType] = useState<{
        id: number;
        label: string;
    }>({ id: 0, label: "" });
    const [currentTargetType, setCurrentTargetType] = useState<{
        id: number;
        label: string;
    }>({ id: 0, label: "" });
    const groupId = () => ({ group_id: currentGroup.id });
    const transform = (data) => ({
        ...data,
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
        <Create transform={transform}>
            <SimpleForm defaultValues={groupId()}>
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
        </Create>
    );
};

export default TransferCreate;

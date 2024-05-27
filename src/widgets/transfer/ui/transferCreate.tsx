import DBSourceParamsEdit from "@entities/transfer/ui/edit/DBSourceParamsEdit";
import DBTargetParamsEdit from "@entities/transfer/ui/edit/DBTargetParamsEdit";
import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import ConnectionSelector from "@widgets/connectionSelector";
import { strategyParams } from "@widgets/transfer/ui/types";
import { useEffect, useState } from "react";
import {
    BooleanInput,
    Create,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
} from "react-admin";

const TransferCreate = () => {
    const [, setCanChangeCurrentGroup] = useLocalStoreChangeGroup();
    useEffect(() => {
        setCanChangeCurrentGroup(true);
    }, []);

    const [currentGroup] = useLocalStoreCurrentGroup();
    const [isScheduled, setIsScheduled] = useState<true | false>();
    // since the list of fields in the target and source parameters depends on the type of connection need to track the states
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
        </Create>
    );
};

export default TransferCreate;

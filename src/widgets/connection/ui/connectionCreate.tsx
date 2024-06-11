import CreateFormWrapper from "@entities/connection/wrappers/createFormWrapper";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import dataProvider from "@shared/api/dataProvider";
import Warning from "@shared/ui/warning";
import type { ConnectionData } from "@widgets/connection/types";
import { useEffect } from "react";
import {
    Create,
    FormDataConsumer,
    Loading,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
} from "react-admin";
import { useQuery } from "react-query";
import useEnableGroupSelector from "@hooks/useEnableGroupSelector";

const ConnectionCreate = () => {
    const [, setEnableGroupSelector] = useEnableGroupSelector();
    useEffect(() => {
        setEnableGroupSelector(true);
    }, []);

    const { data: connectionTypes, isLoading } = useQuery(
        ["connections", "getConnectionTypes"],
        () => dataProvider.getConnectionTypes(),
    );
    const [currentGroup] = useLocalStoreCurrentGroup();
    const groupId = () => ({ group_id: currentGroup.id });

    if (isLoading) return <Loading />;
    return (
        <Create>
            <SimpleForm defaultValues={groupId()}>
                <SelectInput
                    source="connection_data.type"
                    name="connection_data.type"
                    label={"Type"}
                    choices={connectionTypes}
                    validate={required()}
                />
                <TextInput source="name" name="name" required={true} />
                <TextInput
                    source="description"
                    name={"description"}
                    label={"Description"}
                    required={true}
                />

                <FormDataConsumer<ConnectionData>>
                    {({ formData }) => {
                        const connectionType = formData.connection_data
                            ? formData.connection_data.type
                            : undefined;
                        if (connectionType === undefined) {
                            return <Warning message="Select connection type" />;
                        }
                        return (
                            <CreateFormWrapper
                                connectionType={connectionType}
                            />
                        );
                    }}
                </FormDataConsumer>
            </SimpleForm>
        </Create>
    );
};

export default ConnectionCreate;

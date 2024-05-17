import CreateFormWrapper from "@entities/connection/wrappers/createFormWrapper";
import dataProvider from "@shared/api/dataProvider";
import Warning from "@shared/ui/warning";
import type { ConnectionData } from "@widgets/connection/types";
import {
    Create,
    FormDataConsumer,
    Loading,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    useGetList,
} from "react-admin";
import { useQuery } from "react-query";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";

const ConnectionCreate = () => {
    const { data: connectionTypes, isLoading } = useQuery(
        ["connections", "getConnectionTypes"],
        () => dataProvider.getConnectionTypes(),
    );
    const [currentGroup] = useLocalStoreCurrentGroup()

    const { data: groups, isLoading: isLoadingGroups } = useGetList("groups");
    if (isLoading) return <Loading />;
    return (
        <Create>
            <SimpleForm>
                <SelectInput
                    source="connection_data.type"
                    name="connection_data.type"
                    label={"Type"}
                    choices={connectionTypes}
                    validate={required()}
                />
                <SelectInput
                    source="Group"
                    name="group"
                    label={"Group"}
                    choices={groups}
                    validate={required()}
                    defaultValue={currentGroup.id}
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

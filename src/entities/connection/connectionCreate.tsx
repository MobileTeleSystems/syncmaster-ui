import CreateFormWrapper from "@entities/connection/wrappers/createFormWrapper";
import dataProvider from "@shared/api/dataProvider";
import Warning from "@shared/ui/warning";
import type { ConnectionData } from "@widgets/connections/types";
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

const ConnectionCreate = () => {
    const { data: connectionTypes, isLoading } = useQuery(
        ["connections", "getConnectionTypes"],
        () => dataProvider.getConnectionTypes(),
    );

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

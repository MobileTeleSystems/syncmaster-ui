import CreateFormWrapper from "@entities/connection/wrappers/createFormWrapper";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
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
    TextField,
    TextInput,
} from "react-admin";
import { useQuery } from "react-query";

const ConnectionCreate = () => {
    const { data: connectionTypes, isLoading } = useQuery(
        ["connections", "getConnectionTypes"],
        () => dataProvider.getConnectionTypes(),
    );
    const [currentGroup] = useLocalStoreCurrentGroup();

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
                <TextInput
                    source="Group"
                    label={"Group"}
                    name="group"
                    defaultValue={currentGroup.id}
                    style={{ display: "none" }}
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

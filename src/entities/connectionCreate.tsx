import CreateFormWrapper from "@entities/wrappers/createFormWrapper";
import dataProvider from "@shared/api/dataProvider";
import { useState } from "react";
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
    const [connectionType, setConnectionType] = useState({
        name: "postgres",
        port: 5432,
    });
    if (isLoading) return <Loading />;
    return (
        <Create>
            <SimpleForm>
                <SelectInput
                    source="connectionTypes"
                    name="connectionType"
                    choices={connectionTypes}
                    validate={required()}
                    isLoading={isLoading}
                    value={connectionType.name}
                    defaultValue={connectionType.name}
                    onChange={(e) =>
                        setConnectionType({
                            name: e.target.value,
                            port: e.target.value === "postgres" ? 5432 : 1521,
                        })
                    }
                />
                <SelectInput
                    source="Group"
                    name="group"
                    choices={groups}
                    validate={required()}
                    isLoading={isLoadingGroups}
                />
                <TextInput
                    source="Connection name"
                    name="connection_name"
                    required={true}
                />
                <TextInput source="description" required={true} />
                <TextInput
                    source="connection_data.database_name"
                    label={"Database name"}
                    name="databaseName"
                    validate={required()}
                />
                <FormDataConsumer>
                    {({ formData }) => {
                        const connectionType = formData.connectionType
                            ? formData.connectionType
                            : "unknown";
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

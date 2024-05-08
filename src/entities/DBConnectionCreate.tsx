import dataProvider from "@shared/api/dataProvider";
import { useState } from "react";
import {
    Create,
    Loading,
    NumberInput,
    PasswordInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    useGetList,
} from "react-admin";
import { useQuery } from "react-query";

const DBConnectionCreate = () => {
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
                    value={connectionType}
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
                <TextInput
                    name={"host"}
                    source="connection_data.host"
                    label={"Host"}
                    required={true}
                />
                <NumberInput
                    name={"port"}
                    source="connection_data.port"
                    label={"Port"}
                    required={true}
                    // TODO: replace to defaultValue
                    placeholder={connectionType.port.toString()}
                />
                <TextInput
                    name={"user"}
                    source="auth_data.user"
                    label={"User"}
                    required={true}
                />
                <PasswordInput
                    name={"password"}
                    source="password"
                    required={true}
                />
            </SimpleForm>
        </Create>
    );
};

export default DBConnectionCreate;

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
import dataProvider from "@shared/api/dataProvider";
import { validateIp } from "@shared/utils";

const PostgresConnectionCreate = () => {
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
                    source="Connection Type"
                    name="connectionType"
                    choices={connectionTypes}
                    validate={required()}
                    isLoading={isLoading}
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
                    name="name"
                    required={true}
                />
                <TextInput source="description" />
                <SelectInput
                    source="Auth Data Type"
                    name="authDataType"
                    choices={connectionTypes}
                    validate={required()}
                    isLoading={isLoading}
                />
                <TextInput source="auth_data.user" label={"User"} />
                <PasswordInput source="password" required={true} />
                <TextInput
                    source="connection_data.database_name"
                    label={"Database name"}
                    name="databaseName"
                    validate={required()}
                />
                <TextInput
                    source="connection_data.host"
                    label={"Host"}
                    validate={validateIp}
                />
                <NumberInput source="connection_data.port" label={"Port"} />
            </SimpleForm>
        </Create>
    );
};

export default PostgresConnectionCreate;

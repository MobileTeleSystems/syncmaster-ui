import dataProvider from "@shared/api/dataProvider";
import type { ConnectionData } from "@widgets/connections/types";
import {
    Edit,
    Loading,
    NumberInput,
    PasswordInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
} from "react-admin";
import { useQuery } from "react-query";

export const postgresConnectionEdit = ({ data }: { data: ConnectionData }) => {
    const { data: connectionTypes, isLoading } = useQuery(
        ["connections", "getConnectionTypes"],
        () => dataProvider.getConnectionTypes(),
    );

    if (isLoading) return <Loading />;

    return (
        <Edit mutationMode="pessimistic">
            <SimpleForm>
                <TextInput source="id" disabled={true} />
                <SelectInput
                    source="connection_data.type"
                    choices={connectionTypes}
                    validate={required()}
                    isLoading={isLoading}
                    defaultValue={data.connection_data.type}
                    name="connectionType"
                />
                <TextInput source="name" />
                <TextInput source="description" />
                <TextInput
                    source="connection_data.database_name"
                    label={"Database name"}
                />
                <TextInput source="connection_data.host" label={"Host"} />
                <NumberInput source="connection_data.port" label={"Port"} />
                <TextInput source="auth_data.user" label={"User"} />
                <PasswordInput source="password" />
            </SimpleForm>
        </Edit>
    );
};

export default postgresConnectionEdit;

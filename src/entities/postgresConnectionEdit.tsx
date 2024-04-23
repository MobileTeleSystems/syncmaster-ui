import dataProvider from "@shared/api/dataProvider";
import { validateIp } from "@shared/utils";
import {
    Edit,
    Loading,
    NumberInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
} from "react-admin";
import { useQuery } from "react-query";
import type { ConnectionData } from "src/widgets/connections/types";

export const postgresConnectionEdit = ({ data }: { data: ConnectionData }) => {
    const {
        data: connectionTypes,
        isLoading,
    } = useQuery(["connections", "getConnectionTypes"], () =>
        dataProvider.getConnectionTypes(),
    );

    if (isLoading) return <Loading />;

    return (
        <Edit>
            <SimpleForm>
                <TextInput source="id" disabled={true} />
                <SelectInput
                    source="Connection Type"
                    choices={connectionTypes}
                    validate={required()}
                    isLoading={isLoading}
                    defaultValue={data.connection_data.type}
                    disabled={true}
                />
                <TextInput source="name" required={true} />
                <TextInput source="description" />
                <SelectInput
                    source="Auth Data Type"
                    choices={connectionTypes}
                    validate={required()}
                    isLoading={isLoading}
                    defaultValue={data.auth_data.type}
                />
                <TextInput source="auth_data.user" label={"User"} />
                <TextInput
                    source="connection_data.database_name"
                    label={"Database name"}
                />
                <TextInput
                    source="connection_data.host"
                    label={"Host"}
                    validate={validateIp}
                />
                <NumberInput source="connection_data.port" label={"Port"} />
            </SimpleForm>
        </Edit>
    );
};

export default postgresConnectionEdit;

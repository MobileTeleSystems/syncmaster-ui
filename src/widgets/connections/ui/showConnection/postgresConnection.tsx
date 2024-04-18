import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

const ShowPostgresConnection = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="description" />
            <TextField source="auth_data.type" label={"Type"} />
            <TextField source="auth_data.user" label={"User"} />
            <TextField source="connection_data.additional_params" label={"Additional params"} />
            <TextField source="connection_data.database_name" label={"Database name"} />
            <TextField source="connection_data.host" label={"Host"} />
            <TextField source="connection_data.port" label={"Port"} />
            <TextField source="connection_data.type" label={"Connection Type"} />
        </SimpleShowLayout>
    </Show>
);

export default ShowPostgresConnection;
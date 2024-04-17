import { Datagrid, DateField, TextField } from "react-admin";

const PostgresConnection = () => {
    return (
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="description" />
            <TextField source="auth_data.type" label={"Type"} />
            <TextField source="auth_data.user" label={"User"} />
            <TextField
                source="connection_data.additional_params"
                label={"Additional_params"}
            />
            <TextField
                source="connection_data.database_name"
                label={"Database name"}
            />
            <TextField source="connection_data.host" label={"Host"} />
            <TextField source="connection_data.port" label={"Port"} />
            <TextField
                source="connection_data.type"
                label={"Connection Type"}
            />
        </Datagrid>
    );
};

export default PostgresConnection;

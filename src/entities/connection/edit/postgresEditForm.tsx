import { NumberInput, PasswordInput, TextInput } from "react-admin";

const PostgresEditForm = () => {
    return (
        <>
            <TextInput
                name={"connection_data.database_name"}
                source="connection_data.database_name"
                label={"Database name"}
            />
            <TextInput
                source="connection_data.host"
                label={"Host"}
                name={"connection_data.host"}
            />
            <NumberInput
                source="connection_data.port"
                label={"Port"}
                name={"connection_data.port"}
                placeholder={"5432"}
            />
            <TextInput
                source="auth_data.user"
                label={"User"}
                name={"auth_data.user"}
            />
            <PasswordInput
                source="auth_data.password"
                name={"auth_data.password"}
                label={"Password"}
            />
        </>
    );
};

export default PostgresEditForm;

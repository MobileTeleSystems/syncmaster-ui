import { NumberInput, PasswordInput, TextInput } from "react-admin";

const OracleEditForm = () => {
    return (
        <>
            <TextInput
                name={"database_name"}
                source="connection_data.database_name"
                label={"Database name"}
            />
            <TextInput
                source="connection_data.host"
                label={"Host"}
                name={"host"}
            />
            <NumberInput
                source="connection_data.port"
                label={"Port"}
                name={"port"}
            />
            <TextInput source="auth_data.user" label={"User"} name={"user"} />
            <PasswordInput source="password" name={"password"} />
        </>
    );
};

export default OracleEditForm;

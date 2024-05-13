import { NumberInput, PasswordInput, required, TextInput } from "react-admin";

const PostgresCreateForm = () => {
    return (
        <>
            <TextInput
                source="connection_data.database_name"
                name="connection_data.database_name"
                label={"Database name"}
                validate={required()}
            />
            <TextInput
                name={"connection_data.host"}
                source="connection_data.host"
                label={"Host"}
                required={true}
            />
            <NumberInput
                name={"connection_data.port"}
                source="connection_data.port"
                label={"Port"}
                required={true}
                // TODO: replace to defaultValue
                // yes, I tried defaultValue={"5432"} and it still didn't re-render
                placeholder={"5432"}
            />
            <TextInput
                name={"auth_data.user"}
                source="auth_data.user"
                label={"User"}
                required={true}
            />
            <PasswordInput
                name={"auth_data.password"}
                source="auth_data.password"
                label={"Password"}
                required={true}
            />
        </>
    );
};

export default PostgresCreateForm;

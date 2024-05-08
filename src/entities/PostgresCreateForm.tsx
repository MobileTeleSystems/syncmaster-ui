import { NumberInput, PasswordInput, TextInput } from "react-admin";

const PostgresCreateForm = () => {
    return (
        <>
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
                placeholder={"5432"}
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
        </>
    );
};

export default PostgresCreateForm;

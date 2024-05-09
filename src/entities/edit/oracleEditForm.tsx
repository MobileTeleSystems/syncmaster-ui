import { NumberInput, PasswordInput, TextInput } from "react-admin";

const OracleEditForm = () => {
    return (
        <>
            <TextInput
                name={"connection_data.sid"}
                source="connection_data.sid"
                label={"sid"}
            />
            <TextInput
                source="connection_data.host"
                label={"Host"}
                name={"connection_data.host"}
            />
            <TextInput
                source="connection_data.service_name"
                label={"Service name"}
                name={"connection_data.service_name"}
            />
            <NumberInput
                source="connection_data.port"
                label={"Port"}
                name={"connection_data.port"}
                placeholder={"1521"}
            />
            <TextInput
                source="auth_data.user"
                label={"User"}
                name={"auth_data.user"}
            />
            <PasswordInput
                source="auth_data.password"
                label={"Password"}
                name={"auth_data.password"}
            />
        </>
    );
};

export default OracleEditForm;

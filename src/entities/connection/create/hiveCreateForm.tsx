import { PasswordInput, required, TextInput } from "react-admin";

const HiveCreateForm = () => {
    return (
        <>
            <TextInput
                name={"connection_data.cluster"}
                source="connection_data.cluster"
                label={"Cluster"}
                validate={required()}
            />
            <TextInput
                name={"auth_data.user"}
                source="auth_data.user"
                label={"User"}
                validate={required()}
            />
            <PasswordInput
                name={"auth_data.password"}
                source="auth_data.password"
                label={"Password"}
                validate={required()}
            />
        </>
    );
};

export default HiveCreateForm;

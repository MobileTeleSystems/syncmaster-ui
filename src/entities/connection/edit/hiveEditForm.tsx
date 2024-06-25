import { PasswordInput, TextInput } from "react-admin";

const HiveEditForm = () => {
    return (
        <>
            <TextInput
                name={"connection_data.cluster"}
                source="connection_data.cluster"
                label={"Cluster"}
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

export default HiveEditForm;

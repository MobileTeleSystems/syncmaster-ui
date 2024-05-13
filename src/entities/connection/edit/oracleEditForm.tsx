import { useState } from "react";
import { NumberInput, PasswordInput, TextInput } from "react-admin";

const OracleEditForm = () => {
    const [sidState, setSidState] = useState(false);
    const [serviceNameState, setServiceNameState] = useState(false);
    const [sidValue, setSidValue] = useState("");
    const [serviceNameValue, setServiceNameValue] = useState("");

    return (
        <>
            <TextInput
                name={"connection_data.sid"}
                source="connection_data.sid"
                label={"sid"}
                value={sidValue}
                onChange={(e) => {
                    if (e.target.value !== "") {
                        setServiceNameState(true);
                    } else setServiceNameState(false);
                    setSidValue(e.target.value);
                }}
                disabled={sidState}
            />
            <TextInput
                source="connection_data.service_name"
                label={"Service name"}
                name={"connection_data.service_name"}
                value={serviceNameValue}
                onChange={(e) => {
                    if (e.target.value !== "") {
                        setSidState(true);
                    } else setSidState(false);
                    setServiceNameValue(e.target.value);
                }}
                disabled={serviceNameState}
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

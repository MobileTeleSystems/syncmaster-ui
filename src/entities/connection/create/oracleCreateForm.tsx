import { useState } from "react";
import { NumberInput, PasswordInput, required, TextInput } from "react-admin";

const OracleCreateForm = () => {
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
                name={"connection_data.host"}
                source="connection_data.host"
                label={"Host"}
                validate={required()}
            />
            <NumberInput
                name={"connection_data.port"}
                source="connection_data.port"
                label={"Port"}
                validate={required()}
                // TODO: replace to defaultValue
                // yes, I tried defaultValue={"1521"} and it still didn't re-render
                placeholder={"1521"}
            />
            <TextInput
                name={"auth_data.user"}
                source="auth_data.user"
                label={"User"}
                validate={required()}
            />
            <PasswordInput
                name={"auth_data.password"}
                label={"Password"}
                source="password"
                validate={required()}
            />
        </>
    );
};

export default OracleCreateForm;

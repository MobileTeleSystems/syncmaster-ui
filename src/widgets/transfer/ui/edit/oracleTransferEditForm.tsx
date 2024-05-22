import { TextInput } from "react-admin";

const OracleTransferEditForm = ({source, label}: {source: string, label: string}) => {
    return (
        <TextInput
            source={source}
            label={label + ": Oracle"}
            name={source}
        />
    );
};

export default OracleTransferEditForm;

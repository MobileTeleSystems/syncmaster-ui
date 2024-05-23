import { TextInput } from "react-admin";

const OracleTransferEditForm = ({
    source,
    label,
    helperText,
}: {
    source: string;
    label: string;
    helperText: string;
}) => {
    return (
        <TextInput
            source={source}
            label={label}
            name={source}
            helperText={helperText}
        />
    );
};

export default OracleTransferEditForm;

import { TextInput } from "react-admin";

const OracleTransferParamsEditForm = ({
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

export default OracleTransferParamsEditForm;

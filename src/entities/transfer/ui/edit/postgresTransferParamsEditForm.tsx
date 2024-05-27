import { TextInput } from "react-admin";

const PostgresTransferParamsEditForm = ({
    source,
    label,
}: {
    source: string;
    label: string;
}) => {
    return (
        <TextInput
            source={source}
            label={label}
            name={source}
        />
    );
};

export default PostgresTransferParamsEditForm;

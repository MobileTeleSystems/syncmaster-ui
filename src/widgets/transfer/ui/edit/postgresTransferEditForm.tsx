import { TextInput } from "react-admin";

const PostgresTransferEditForm = ({source, label}:{source: string, label: string}) => {
    return (
        <TextInput
            source={source}
            label={label}
            name={source}
        />
    );
};

export default PostgresTransferEditForm;

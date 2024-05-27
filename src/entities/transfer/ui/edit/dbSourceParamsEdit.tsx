import { TextInput } from "react-admin";

const DBSourceParamsEdit = () => {
    return (
        <TextInput
            source={"source_params.table_name"}
            label={"Source (schema.table)"}
            name={"source_params.table_name"}
        />
    );
};

export default DBSourceParamsEdit;
